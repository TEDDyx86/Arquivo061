import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'
import { products } from '../data/products'
import {
  addItem,
  getSubtotal,
  parseStoredCart,
  removeItem,
  setItemQuantity,
  type CartItem,
} from './cart'

const storageKey = 'arquivo061-cart'

type CartContextValue = {
  items: CartItem[]
  itemCount: number
  subtotal: number
  addProduct: (productId: string, size: string) => void
  setQuantity: (productId: string, size: string, quantity: number) => void
  removeLine: (productId: string, size: string) => void
}

const CartContext = createContext<CartContextValue | null>(null)
const pricesByProductId = Object.fromEntries(products.map((product) => [product.id, product.price]))

function getInitialCart(): CartItem[] {
  try {
    return typeof window === 'undefined' ? [] : parseStoredCart(window.localStorage.getItem(storageKey))
  } catch {
    return []
  }
}

export function CartProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<CartItem[]>(getInitialCart)

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(items))
    } catch {
      // The cart remains usable for this tab when browser storage is unavailable.
    }
  }, [items])

  const addProduct = useCallback((productId: string, size: string) => {
    setItems((current) => addItem(current, productId, size))
  }, [])

  const setQuantity = useCallback((productId: string, size: string, quantity: number) => {
    setItems((current) => setItemQuantity(current, productId, size, quantity))
  }, [])

  const removeLine = useCallback((productId: string, size: string) => {
    setItems((current) => removeItem(current, productId, size))
  }, [])

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      itemCount: items.reduce((count, item) => count + item.quantity, 0),
      subtotal: getSubtotal(items, pricesByProductId),
      addProduct,
      setQuantity,
      removeLine,
    }),
    [items, addProduct, setQuantity, removeLine],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart deve ser usado dentro de CartProvider')
  return context
}
