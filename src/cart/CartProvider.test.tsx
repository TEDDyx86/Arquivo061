import { act, renderHook } from '@testing-library/react'
import type { PropsWithChildren } from 'react'
import { afterEach, describe, expect, it } from 'vitest'
import { CartProvider, useCart } from './CartProvider'

const storageKey = 'arquivo061-cart'

function wrapper({ children }: PropsWithChildren) {
  return <CartProvider>{children}</CartProvider>
}

afterEach(() => localStorage.clear())

describe('CartProvider', () => {
  it('restores valid cart lines from local storage on mount', () => {
    localStorage.setItem(storageKey, JSON.stringify([{ productId: 'camiseta-arquivo-fantasma', size: 'P', quantity: 2 }]))

    const { result } = renderHook(() => useCart(), { wrapper })

    expect(result.current.items).toEqual([
      { productId: 'camiseta-arquivo-fantasma', size: 'P', quantity: 2 },
    ])
  })

  it('persists cart changes to local storage', () => {
    const { result } = renderHook(() => useCart(), { wrapper })

    act(() => result.current.addProduct('camiseta-arquivo-fantasma', 'M'))

    expect(JSON.parse(localStorage.getItem(storageKey) ?? '[]')).toEqual([
      { productId: 'camiseta-arquivo-fantasma', size: 'M', quantity: 1 },
    ])
  })

  it('recovers from malformed persisted JSON without throwing', () => {
    localStorage.setItem(storageKey, '{broken')

    const { result } = renderHook(() => useCart(), { wrapper })

    expect(result.current.items).toEqual([])
  })
})
