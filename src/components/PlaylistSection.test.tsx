import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PlaylistSection } from './PlaylistSection'

describe('PlaylistSection', () => {
  it('embeds the supplied Spotify playlist in a titled lazy-loading iframe', () => {
    render(<PlaylistSection />)

    const frame = screen.getByTitle('Playlist ARQUIVO061 no Spotify')
    expect(frame).toHaveAttribute(
      'src',
      'https://open.spotify.com/embed/playlist/5pbJ42jJ9g4GOxWt5VWNxF?utm_source=generator&theme=0',
    )
    expect(frame).toHaveAttribute('loading', 'lazy')
  })

  it('shows the section heading and a direct link to the playlist', () => {
    render(<PlaylistSection />)

    expect(screen.getByRole('heading', { name: 'Trilha do arquivo.' })).toBeInTheDocument()
    expect(screen.getByText('A identidade sonora que guia o ARQUIVO061. Escute a seleção musical que inspirou esta coleção.')).toBeInTheDocument()
    expect(screen.queryByText(/Dê o play na playlist/)).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: /abrir playlist no spotify/i })).toHaveAttribute(
      'href',
      'https://open.spotify.com/playlist/5pbJ42jJ9g4GOxWt5VWNxF?si=VQbk2HszRtGIAfePhJf1yA',
    )
    expect(screen.getByRole('link', { name: /abrir playlist no spotify/i })).toHaveAttribute('target', '_blank')
    expect(screen.getByRole('link', { name: /abrir playlist no spotify/i })).toHaveAttribute('rel', 'noreferrer')
  })
})
