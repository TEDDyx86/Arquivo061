import { cleanup, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'
import App from './App'

afterEach(() => {
  cleanup()
  localStorage.clear()
  window.history.replaceState({}, '', '/')
})

describe('storefront shopping flow', () => {
  it('links the manifesto story button to the standalone origin page', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /como tudo começou/i })).toHaveAttribute('href', '/sobre-o-arquivo')
  })

  it('requires a size before adding a product', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Adicionar Moletom Bloco 061' }))

    expect(screen.getByRole('alert')).toHaveTextContent('Escolha um tamanho')
    expect(screen.getByRole('button', { name: /Abrir sacola/ })).toHaveAccessibleName('Abrir sacola, 0 itens')
  })

  it('adds a selected size and opens a cart with the subtotal', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Selecionar tamanho M — Moletom Bloco 061' }))
    await user.click(screen.getByRole('button', { name: 'Adicionar Moletom Bloco 061' }))
    await user.click(screen.getByRole('button', { name: /Abrir sacola/ }))

    const dialog = screen.getByRole('dialog', { name: 'Sua sacola' })
    expect(dialog).toBeInTheDocument()
    expect(within(dialog).getByRole('heading', { name: 'Moletom Bloco 061' })).toBeInTheDocument()
    expect(within(dialog).getByText(/Tamanho M/)).toBeInTheDocument()
    expect(within(dialog).getByText('Subtotal')).toBeInTheDocument()
    expect(within(dialog).getByLabelText('Subtotal: R$ 289,00')).toBeInTheDocument()
    expect(screen.getByText(/pagamento online chega em breve/i)).toBeInTheDocument()
  })

  it('updates quantities and removes the selected product-size line', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Selecionar tamanho M — Moletom Bloco 061' }))
    await user.click(screen.getByRole('button', { name: 'Adicionar Moletom Bloco 061' }))
    await user.click(screen.getByRole('button', { name: /Abrir sacola/ }))
    await user.click(screen.getByRole('button', { name: 'Aumentar quantidade de Moletom Bloco 061 tamanho M' }))

    expect(within(screen.getByRole('dialog', { name: 'Sua sacola' })).getByLabelText('Subtotal: R$ 578,00')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Remover Moletom Bloco 061 tamanho M' }))
    expect(screen.getByText('Sua sacola está vazia')).toBeInTheDocument()
  })

  it('closes the cart with Escape and restores focus to its trigger', async () => {
    const user = userEvent.setup()
    render(<App />)
    const trigger = screen.getByRole('button', { name: 'Abrir sacola, 0 itens' })

    await user.click(trigger)
    expect(screen.getByRole('button', { name: 'Fechar sacola' })).toHaveFocus()
    await user.keyboard('{Escape}')

    expect(screen.queryByRole('dialog', { name: 'Sua sacola' })).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()
  })
})

describe('standalone origin story page', () => {
  it('renders the supplied story, GOG portrait, and a link back to the storefront', () => {
    window.history.replaceState({}, '', '/sobre-o-arquivo')
    render(<App />)

    expect(screen.getByRole('heading', { name: /como tudo começou/i })).toBeInTheDocument()
    expect(screen.getByText(/Na Ceilândia, moda nunca foi sobre a etiqueta cara do shopping/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /a voz.*gog/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /mapa esquemático das vias de ceilândia/i })).toHaveAttribute(
      'src',
      '/assets/brand/ceil-andia-map.svg',
    )
    expect(screen.getByRole('img', { name: /localização do arquivo061.*15°49′02″s/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /openstreetmap contributors/i })).toHaveAttribute(
      'href',
      'https://www.openstreetmap.org/copyright',
    )
    expect(screen.getByRole('img', { name: /GOG|Genival Oliveira Gonçalves/i })).toHaveAttribute(
      'src',
      '/assets/brand/gog.jpg',
    )
    expect(screen.getByRole('contentinfo').querySelector('a')).toHaveAttribute('href', '/')
    expect(screen.queryByRole('button', { name: /abrir sacola/i })).not.toBeInTheDocument()
  })
})
