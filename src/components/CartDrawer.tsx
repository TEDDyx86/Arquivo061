import { Minus, Plus, Trash2, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { productById } from '../data/products'
import type { CartItem } from '../cart/cart'

type CartDrawerProps = {
  open: boolean
  items: CartItem[]
  subtotal: number
  onClose: () => void
  onQuantityChange: (productId: string, size: string, quantity: number) => void
  onRemove: (productId: string, size: string) => void
}

const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export function CartDrawer({ open, items, subtotal, onClose, onQuantityChange, onRemove }: CartDrawerProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    closeButtonRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab') return
      const focusable = document.querySelectorAll<HTMLElement>(
        '.cart-drawer button:not([disabled]), .cart-drawer a[href], .cart-drawer [tabindex]:not([tabindex="-1"])',
      )
      const first = focusable.item(0)
      const last = focusable.item(focusable.length - 1)

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      previousFocus?.focus()
    }
  }, [open, onClose])

  if (!open) return null

  const knownItems = items.filter((item) => productById[item.productId])

  return (
    <div className="cart-layer" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section aria-label="Sua sacola" aria-modal="true" className="cart-drawer" role="dialog">
        <header className="cart-drawer-header">
          <div>
            <p className="drawer-label">ARQUIVO DE PEÇAS</p>
            <h2>Sua sacola<span>.</span></h2>
          </div>
          <button aria-label="Fechar sacola" className="icon-button" onClick={onClose} ref={closeButtonRef} type="button">
            <X size={21} aria-hidden="true" />
          </button>
        </header>

        {knownItems.length === 0 ? (
          <div className="cart-empty">
            <img src="/assets/brand/arquivo061-ghost.png" alt="" />
            <p>Sua sacola está vazia</p>
            <span>Tem peça esperando para ganhar outra história.</span>
            <button className="text-action" onClick={onClose} type="button">Voltar à coleção <span aria-hidden="true">↗</span></button>
          </div>
        ) : (
          <>
            <ul className="cart-lines">
              {knownItems.map((item) => {
                const product = productById[item.productId]
                return (
                  <li className="cart-line" key={`${item.productId}-${item.size}`}>
                    <img src={product.image} alt="" />
                    <div className="cart-line-content">
                      <div className="cart-line-heading">
                        <div>
                          <h3>{product.name}</h3>
                          <p>{product.colorLabel} · Tamanho {item.size}</p>
                        </div>
                        <button
                          aria-label={`Remover ${product.name} tamanho ${item.size}`}
                          className="remove-line"
                          onClick={() => onRemove(item.productId, item.size)}
                          type="button"
                        >
                          <Trash2 size={16} aria-hidden="true" />
                        </button>
                      </div>
                      <div className="cart-line-bottom">
                        <div className="quantity-control" aria-label={`Quantidade de ${product.name} tamanho ${item.size}`}>
                          <button
                            aria-label={`Diminuir quantidade de ${product.name} tamanho ${item.size}`}
                            onClick={() => onQuantityChange(item.productId, item.size, item.quantity - 1)}
                            type="button"
                          ><Minus size={13} aria-hidden="true" /></button>
                          <span>{item.quantity}</span>
                          <button
                            aria-label={`Aumentar quantidade de ${product.name} tamanho ${item.size}`}
                            onClick={() => onQuantityChange(item.productId, item.size, item.quantity + 1)}
                            type="button"
                          ><Plus size={13} aria-hidden="true" /></button>
                        </div>
                        <strong>{currency.format(product.price * item.quantity)}</strong>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
            <footer className="cart-summary">
              <div className="subtotal-row"><span>Subtotal</span><strong aria-label={`Subtotal: ${currency.format(subtotal)}`}>{currency.format(subtotal)}</strong></div>
              <p>Frete calculado em uma próxima etapa.</p>
              <div className="checkout-notice" role="note">
                <span className="notice-dot" aria-hidden="true" />
                <span>Pagamento online chega em breve. Este resumo não envia nem confirma seu pedido.</span>
              </div>
            </footer>
          </>
        )}
      </section>
    </div>
  )
}
