import { Menu, ShoppingBag } from 'lucide-react'
import { useState } from 'react'

type SiteHeaderProps = {
  cartCount: number
  onOpenCart: () => void
}

export function SiteHeader({ cartCount, onOpenCart }: SiteHeaderProps) {
  const itemLabel = cartCount === 1 ? 'item' : 'itens'
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="brand-lockup" href="#top" aria-label="ARQUIVO061 — início">
        <img src="/assets/brand/arquivo061-wordmark-white.png" alt="ARQUIVO061" />
      </a>
      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
        <a href="#colecao" onClick={() => setMenuOpen(false)}>Coleção</a>
        <a href="#manifesto" onClick={() => setMenuOpen(false)}>Manifesto</a>
      </nav>
      <div className="header-actions">
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar navegação' : 'Abrir navegação'}
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <Menu size={19} aria-hidden="true" />
        </button>
        <button aria-label={`Abrir sacola, ${cartCount} ${itemLabel}`} className="cart-trigger" type="button" onClick={onOpenCart}>
          <ShoppingBag size={17} strokeWidth={1.8} aria-hidden="true" />
          <span>Sacola</span>
          <span className="cart-count" aria-hidden="true">{cartCount}</span>
        </button>
      </div>
    </header>
  )
}
