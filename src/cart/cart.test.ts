import { describe, expect, it } from 'vitest'
import {
  addItem,
  getSubtotal,
  parseStoredCart,
  removeItem,
  setItemQuantity,
  type CartItem,
} from './cart'

describe('cart operations', () => {
  it('increments the same product and size while keeping other sizes separate', () => {
    const first = addItem([], 'hoodie-shark', 'M')
    const sameSize = addItem(first, 'hoodie-shark', 'M')
    const otherSize = addItem(sameSize, 'hoodie-shark', 'G')

    expect(otherSize).toEqual([
      { productId: 'hoodie-shark', size: 'M', quantity: 2 },
      { productId: 'hoodie-shark', size: 'G', quantity: 1 },
    ])
  })

  it('sets a positive quantity and removes a line when quantity reaches zero', () => {
    const items: CartItem[] = [{ productId: 'tee-ghost', size: 'P', quantity: 2 }]

    expect(setItemQuantity(items, 'tee-ghost', 'P', 4)[0].quantity).toBe(4)
    expect(setItemQuantity(items, 'tee-ghost', 'P', 0)).toEqual([])
  })

  it('removes only the selected product-size line', () => {
    const items: CartItem[] = [
      { productId: 'hoodie-shark', size: 'M', quantity: 1 },
      { productId: 'hoodie-shark', size: 'G', quantity: 1 },
    ]

    expect(removeItem(items, 'hoodie-shark', 'M')).toEqual([
      { productId: 'hoodie-shark', size: 'G', quantity: 1 },
    ])
  })

  it('calculates subtotal from product prices and line quantities', () => {
    const items: CartItem[] = [
      { productId: 'hoodie-shark', size: 'M', quantity: 2 },
      { productId: 'tee-ghost', size: 'P', quantity: 1 },
    ]

    expect(getSubtotal(items, { 'hoodie-shark': 329, 'tee-ghost': 119 })).toBe(777)
  })

  it('returns an empty cart for malformed JSON or invalid cart lines', () => {
    expect(parseStoredCart('{not json')).toEqual([])
    expect(parseStoredCart(JSON.stringify([{ productId: '', size: 'M', quantity: 0 }]))).toEqual([])
  })

  it('restores only valid cart lines from stored data', () => {
    const stored = JSON.stringify([
      { productId: 'tee-ghost', size: 'GG', quantity: 2 },
      { productId: 'bad-item', size: 'XL', quantity: -1 },
    ])

    expect(parseStoredCart(stored)).toEqual([
      { productId: 'tee-ghost', size: 'GG', quantity: 2 },
    ])
  })
})
