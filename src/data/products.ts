export const sizes = ['PP', 'P', 'M', 'G', 'GG'] as const

export type ProductSize = (typeof sizes)[number]

export type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
  sizes: readonly ProductSize[]
  category: 'moletom' | 'camiseta'
  colorLabel: string
}

export const products: Product[] = [
  {
    id: 'moletom-bloco-061',
    name: 'Moletom Bloco 061',
    description: 'Meio zíper · recortes color block',
    price: 289,
    image: '/assets/products/moletom-bloco-061.png',
    sizes,
    category: 'moletom',
    colorLabel: 'Vinho, marinho e oliva',
  },
  {
    id: 'camiseta-arquivo-fantasma',
    name: 'Camiseta Arquivo Fantasma',
    description: 'Algodão cru · estampa nas costas',
    price: 119,
    image: '/assets/products/camiseta-arquivo-fantasma.jpg',
    sizes,
    category: 'camiseta',
    colorLabel: 'Cru e vinho',
  },
  {
    id: 'moletom-remendo-vinho',
    name: 'Moletom Remendo Shark',
    description: 'Patchwork único · base vinho',
    price: 329,
    image: '/assets/products/moletom-remendo-vinho.jpg',
    sizes,
    category: 'moletom',
    colorLabel: 'Vinho',
  },
  {
    id: 'moletom-remendo-cru',
    name: 'Moletom Remendo Shark',
    description: 'Patchwork único · base cru',
    price: 329,
    image: '/assets/products/moletom-remendo-cru.jpg',
    sizes,
    category: 'moletom',
    colorLabel: 'Cru',
  },
]

export const productById = Object.fromEntries(products.map((product) => [product.id, product])) as Record<
  string,
  Product
>
