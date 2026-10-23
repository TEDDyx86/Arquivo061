import { ArrowDown, ArrowDownRight, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { CartDrawer } from './components/CartDrawer'
import { ProductGrid } from './components/ProductGrid'
import { PlaylistSection } from './components/PlaylistSection'
import { OriginStoryPage } from './components/OriginStoryPage'
import { SiteHeader } from './components/SiteHeader'
import { CartProvider, useCart } from './cart/CartProvider'

function Storefront() {
  const cart = useCart()
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <div className="announcement-bar">
        <span>CEILÂNDIA, DISTRITO FEDERAL</span>
        <span className="announcement-center">O DESCARTE VIRA IDENTIDADE</span>
        <span>15°49′S / 48°06′W</span>
      </div>
      <SiteHeader cartCount={cart.itemCount} onOpenCart={() => setCartOpen(true)} />

      <main id="top">
        <section className="opening" aria-labelledby="opening-title">
          <div className="opening-copy">
            <p className="file-stamp"><span className="file-dot" /> NOVO ARQUIVO · DF / 061</p>
            <h1 id="opening-title">O que a indústria descarta, <em>a rua transforma em história.</em></h1>
            <div className="opening-bottom">
              <p>Streetwear de Ceilândia. Cada peça carrega as marcas do que já foi — e a liberdade do que pode ser.</p>
              <a className="shop-link" href="#colecao">Explorar coleção <ArrowDownRight size={19} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="opening-art">
            <div className="hero-image-frame">
              <img src="/assets/products/moletom-remendo-vinho.jpg" alt="Moletom Remendo Shark vinho, com aplicações de tecidos reaproveitados" />
              <span className="hero-image-caption">PEÇA 03 / REMENDO SHARK</span>
            </div>
            <div className="hero-seal" aria-hidden="true"><span>RE / ARQUIVADO</span><img src="/assets/brand/arquivo061-ghost.png" alt="" /></div>
            <span className="opening-coordinate" aria-hidden="true">TAG 061<br />15.8172 / -48.1052</span>
          </div>
          <a className="scroll-cue" href="#colecao" aria-label="Descer até a coleção"><ArrowDown size={17} aria-hidden="true" /></a>
        </section>

        <section className="collection-section" id="colecao" aria-labelledby="collection-title">
          <div className="section-topline"><span>PEÇAS EM CIRCULAÇÃO</span><span>COLEÇÃO 001 — 004</span></div>
          <div className="collection-heading">
            <h2 id="collection-title">Arquivo<br /><span>em uso.</span></h2>
            <p>Peças únicas, feitas a partir de tecidos que ainda tinham muito a dizer. Escolha seu tamanho e leve a próxima história.</p>
            <span className="collection-index">4<br /><small>PEÇAS</small></span>
          </div>
          <ProductGrid onAdd={cart.addProduct} />
          <div className="sample-disclaimer">CATÁLOGO DEMONSTRATIVO <span>·</span> PREÇOS E DISPONIBILIDADE SÃO EXEMPLOS</div>
        </section>

        <PlaylistSection />

        <section className="manifesto-section" id="manifesto" aria-labelledby="manifesto-title">
          <div className="manifesto-image">
            <img src="/assets/brand/ceilândia-water-tower.png" alt="Vista urbana de Ceilândia com a caixa d'água ao fundo" loading="lazy" />
            <span>CEILÂNDIA / DF</span>
          </div>
          <div className="manifesto-copy">
            <p className="section-label">UM LUGAR. MUITAS CAMADAS.</p>
            <h2 id="manifesto-title">Feito de sobra.<br /><em>Cheio de presença.</em></h2>
            <p>ARQUIVO061 nasce do encontro entre rua, identidade e reinvenção. Aqui, o tecido não termina quando a indústria vira a página — ele encontra outro corte, outra forma, outro corpo.</p>
            <a href="/sobre-o-arquivo" className="manifesto-link">Como tudo começou <ArrowRight size={17} aria-hidden="true" /></a>
          </div>
          <img className="manifesto-ghost" src="/assets/brand/arquivo061-ghost.png" alt="" aria-hidden="true" loading="lazy" />
        </section>

        <footer className="site-footer">
          <img className="footer-wordmark" src="/assets/brand/arquivo061-wordmark-white.png" alt="ARQUIVO061" loading="lazy" />
          <p>O que a indústria descarta,<br />a rua transforma em história.</p>
          <a href="#top">VOLTAR AO TOPO <span aria-hidden="true">↑</span></a>
          <small>CEILÂNDIA · DISTRITO FEDERAL · BRASIL</small>
        </footer>
      </main>

      <CartDrawer
        items={cart.items}
        onClose={() => setCartOpen(false)}
        onQuantityChange={cart.setQuantity}
        onRemove={cart.removeLine}
        open={cartOpen}
        subtotal={cart.subtotal}
      />
    </>
  )
}

export default function App() {
  if (window.location.pathname === '/sobre-o-arquivo') {
    return <OriginStoryPage />
  }

  return <CartProvider><Storefront /></CartProvider>
}
