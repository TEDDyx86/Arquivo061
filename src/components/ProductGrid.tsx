import { products } from '../data/products'
import type { ProductSize } from '../data/products'
import { ProductCard } from './ProductCard'

type ProductGridProps = {
  onAdd: (productId: string, size: ProductSize) => void
}

export function ProductGrid({ onAdd }: ProductGridProps) {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard index={index} key={product.id} onAdd={onAdd} product={product} />
      ))}
    </div>
  )
}
