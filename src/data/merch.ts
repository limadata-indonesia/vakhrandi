export type MerchCategory = 'T-Shirt' | 'Hoodie' | 'Cap' | 'Poster' | 'CD' | 'Vinyl'
export type StockStatus  = 'In Stock' | 'Low Stock' | 'Sold Out'

export interface MerchItem {
  slug: string
  name: string
  category: MerchCategory
  price: number
  sizes?: string[]
  stock: StockStatus
  description: string
  details: string[]
  marketplace?: string
  whatsapp?: string
  emoji: string
}

export const merch: MerchItem[] = [
  {
    slug: 'vakhrandi-classic-tee',
    name: 'VAKHRANDI Classic Tee',
    category: 'T-Shirt',
    price: 185000,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 'In Stock',
    description: 'The essential VAKHRANDI tee. Heavyweight 220gsm cotton with a clean front-logo print. Fits true to size with a slightly relaxed cut.',
    details: ['220gsm combed cotton', 'Screen-printed logo', 'Unisex relaxed fit', 'Machine washable'],
    whatsapp: '#',
    marketplace: '#',
    emoji: '👕',
  },
  {
    slug: 'broken-signals-hoodie',
    name: 'Broken Signals Hoodie',
    category: 'Hoodie',
    price: 365000,
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 'Low Stock',
    description: 'Limited run hoodie from the "Broken Signals" single campaign. Thick fleece interior, embroidered chest logo, artwork back print.',
    details: ['350gsm fleece cotton', 'Embroidered front logo', 'Back artwork print', 'Kangaroo pocket', 'Drawstring hood'],
    whatsapp: '#',
    marketplace: '#',
    emoji: '🧥',
  },
  {
    slug: 'logo-cap',
    name: 'Logo Cap',
    category: 'Cap',
    price: 145000,
    stock: 'In Stock',
    description: 'Six-panel structured cap with embroidered VAKHRANDI wordmark on the front. Adjustable strap, one size fits most.',
    details: ['6-panel structured cap', 'Embroidered wordmark', 'Adjustable back strap', 'One size fits most'],
    whatsapp: '#',
    marketplace: '#',
    emoji: '🧢',
  },
  {
    slug: 'dusk-circuit-poster',
    name: 'Dusk Circuit Poster (A2)',
    category: 'Poster',
    price: 95000,
    stock: 'In Stock',
    description: 'A2 art print from the Dusk Circuit EP campaign. Printed on 200gsm matte fine-art paper with rich, deep tones.',
    details: ['A2 size (42 × 59.4 cm)', '200gsm matte fine-art paper', 'Borderless print', 'Ships rolled in a protective tube'],
    whatsapp: '#',
    emoji: '🖼',
  },
  {
    slug: 'dusk-circuit-cd',
    name: 'Dusk Circuit EP — CD',
    category: 'CD',
    price: 125000,
    stock: 'In Stock',
    description: 'Physical CD edition of the Dusk Circuit EP. Includes 6-page booklet with lyrics, production notes, and exclusive artwork.',
    details: ['5-track EP', 'Jewel case + 6-page booklet', 'Lyrics & production notes', 'Signed copies available on request'],
    whatsapp: '#',
    marketplace: '#',
    emoji: '💿',
  },
  {
    slug: 'dusk-circuit-vinyl',
    name: 'Dusk Circuit EP — Vinyl',
    category: 'Vinyl',
    price: 490000,
    stock: 'Sold Out',
    description: 'Limited edition 12" vinyl pressing of the Dusk Circuit EP. 180g audiophile-grade vinyl with full-color gatefold sleeve. All 50 copies sold.',
    details: ['12" 180g vinyl', 'Full-color gatefold sleeve', 'Limited to 50 copies', 'Currently sold out — join waitlist'],
    whatsapp: '#',
    emoji: '🎵',
  },
]

export function getMerchBySlug(slug: string): MerchItem | undefined {
  return merch.find(item => item.slug === slug)
}

export const fmt = (n: number) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n)
