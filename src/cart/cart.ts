export type CartItem = {
  productId: string
  size: string
  quantity: number
}

const validSizes = new Set(['PP', 'P', 'M', 'G', 'GG'])

export function addItem(items: CartItem[], productId: string, size: string): CartItem[] {
  const existing = items.find((item) => item.productId === productId && item.size === size)

  if (existing) {
    return items.map((item) =>
      item.productId === productId && item.size === size
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    )
  }

  return [...items, { productId, size, quantity: 1 }]
}

export function setItemQuantity(
  items: CartItem[],
  productId: string,
  size: string,
  quantity: number,
): CartItem[] {
  if (!Number.isInteger(quantity) || quantity <= 0) {
    return removeItem(items, productId, size)
  }

  return items.map((item) =>
    item.productId === productId && item.size === size ? { ...item, quantity } : item,
  )
}

export function removeItem(items: CartItem[], productId: string, size: string): CartItem[] {
  return items.filter((item) => item.productId !== productId || item.size !== size)
}

export function getSubtotal(items: CartItem[], pricesByProductId: Record<string, number>): number {
  return items.reduce(
    (subtotal, item) => subtotal + (pricesByProductId[item.productId] ?? 0) * item.quantity,
    0,
  )
}

export function parseStoredCart(value: string | null): CartItem[] {
  if (!value) return []

  try {
    const parsed: unknown = JSON.parse(value)
    if (!Array.isArray(parsed)) return []

    return parsed.filter(
      (item): item is CartItem =>
        typeof item === 'object' &&
        item !== null &&
        typeof item.productId === 'string' &&
        item.productId.length > 0 &&
        typeof item.size === 'string' &&
        validSizes.has(item.size) &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0,
    )
  } catch {
    return []
  }
}
