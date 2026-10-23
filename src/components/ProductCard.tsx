import { Plus } from 'lucide-react'
import { useState } from 'react'
import type { Product, ProductSize } from '../data/products'

type ProductCardProps = {
  product: Product
  index: number
  onAdd: (productId: string, size: ProductSize) => void
}

const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export function ProductCard({ product, index, onAdd }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null)
  const [error, setError] = useState(false)
  const [added, setAdded] = useState(false)

  function handleAdd() {
    if (!selectedSize) {
      setError(true)
      setAdded(false)
      return
    }

    onAdd(product.id, selectedSize)
    setError(false)
    setAdded(true)
  }

  return (
    <article className={`product-entry product-entry--${index + 1}`}>
      <div className="product-image-wrap">
        <img className="product-image" src={product.image} alt={`${product.name} — ${product.colorLabel}`} loading="lazy" />
        <span className="product-index">ARQ / {String(index + 1).padStart(2, '0')}</span>
        <span className="product-detail" aria-hidden="true">↗</span>
      </div>
      <div className="product-info">
        <div className="product-title-line">
          <div>
            <p className="product-category">{product.category === 'camiseta' ? 'Peça gráfica' : 'Peça reconstruída'}</p>
            <h3>{product.name}</h3>
          </div>
          <p className="product-price">{currency.format(product.price)}</p>
        </div>
        <p className="product-description">{product.description}</p>
        <div className="product-buy-row">
          <fieldset className="size-picker">
            <legend>Tamanho</legend>
            {product.sizes.map((size) => (
              <button
                aria-label={`Selecionar tamanho ${size} — ${product.name}`}
                aria-pressed={selectedSize === size}
                className={selectedSize === size ? 'size-option is-selected' : 'size-option'}
                key={size}
                onClick={() => {
                  setSelectedSize(size)
                  setError(false)
                  setAdded(false)
                }}
                type="button"
              >
                {size}
              </button>
            ))}
          </fieldset>
          <button className="add-button" onClick={handleAdd} type="button">
            <span>{added ? 'Na sacola' : 'Adicionar'}</span>
            <Plus size={16} aria-hidden="true" />
            <span className="sr-only">{product.name}</span>
          </button>
        </div>
        {error && <p className="product-feedback" role="alert">Escolha um tamanho antes de adicionar.</p>}
        {added && <p className="product-feedback product-feedback--success" role="status">Peça adicionada à sacola.</p>}
      </div>
    </article>
  )
}
