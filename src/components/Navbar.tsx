geeby Cleo — all project files
Copy each section between the ===== markers into a file at the exact path shown.

===== FILE: package.json =====
{
  "name": "geeby-cleo",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^11.3.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.39",
    "tailwindcss": "^3.4.6",
    "typescript": "^5.5.3",
    "vite": "^5.3.4"
  }
}

===== FILE: vite.config.ts =====
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})

===== FILE: tsconfig.json =====
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}

===== FILE: tailwind.config.js =====
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFFEF9',
        ink: '#0A0A0A',
        clay: '#C4622D',
        sand: '#E8DCC8',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        mega: '0.28em',
      },
    },
  },
  plugins: [],
}

===== FILE: postcss.config.js =====
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

===== FILE: index.html =====
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>geeby Cleo — Women's Boutique, Nashville TN</title>
    <meta name="description" content="Curated women's clothing boutique in Nashville, TN. Effortless style from Vince, Velvet, Ulla Johnson, Free People, Veronica Beard and Rails." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

===== FILE: README.md =====
# geeby Cleo — Women's Boutique, Nashville TN

Chic boutique storefront built with **React + Vite + TypeScript + Tailwind CSS + Framer Motion**.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build for production

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build
```

## Design tokens

| Token       | Value     | Usage                        |
|-------------|-----------|------------------------------|
| Cream       | `#FFFEF9` | Warm white background        |
| Ink         | `#0A0A0A` | Near-black primary / footer  |
| Clay        | `#C4622D` | Terracotta accent / CTAs     |
| Sand        | `#E8DCC8` | Warm sand secondary / bands  |

- Hero headings: Bebas Neue (condensed editorial sans)
- Body & product names: Inter; prices use `font-tabular` (tabular numerals)
- Hero image: slow 8s Ken Burns zoom
- Product cards: hover reveals a second photo, "Add to Bag" slides up
- Mobile: hamburger nav, swipeable product rows, stacked category blocks, sticky cart button

## Structure

```
src/
  data/products.ts        # products, brands, looks, reviews, IG photos
  components/
    Navbar, Hero, NewArrivals, ProductCard, Categories, Brands,
    Lookbook, Bestsellers, About, Reviews, Newsletter,
    InstagramRow, Footer, CartDrawer, StickyCart, Icons
  App.tsx                 # cart + wishlist state, section composition
```

Product and editorial photography are Unsplash stand-ins — swap the URLs in
`src/data/products.ts` (and the Hero/Categories/About components) for real
boutique photography when ready.

===== FILE: src/main.tsx =====
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

===== FILE: src/index.css =====
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background-color: #fffef9;
  color: #0a0a0a;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.font-tabular {
  font-variant-numeric: tabular-nums;
  font-feature-settings: 'tnum';
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@keyframes kenburns {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.12);
  }
}

.kenburns {
  animation: kenburns 8s ease-out forwards;
  will-change: transform;
}

::selection {
  background: #c4622d;
  color: #fffef9;
}

===== FILE: src/App.tsx =====
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NewArrivals from './components/NewArrivals'
import Categories from './components/Categories'
import Brands from './components/Brands'
import Lookbook from './components/Lookbook'
import Bestsellers from './components/Bestsellers'
import About from './components/About'
import Reviews from './components/Reviews'
import Newsletter from './components/Newsletter'
import InstagramRow from './components/InstagramRow'
import Footer from './components/Footer'
import CartDrawer, { type CartItem } from './components/CartDrawer'
import StickyCart from './components/StickyCart'
import { newArrivals, bestsellers, type Product } from './data/products'

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [wishlist, setWishlist] = useState<Set<string>>(new Set())
  const [cartOpen, setCartOpen] = useState(false)

  const addToCart = (p: Product) =>
    setCart((prev) => {
      const existing = prev.find((i) => i.product.id === p.id)
      if (existing) {
        return prev.map((i) => (i.product.id === p.id ? { ...i, qty: i.qty + 1 } : i))
      }
      return [...prev, { product: p, qty: 1 }]
    })

  const updateQty = (id: string, qty: number) => {
    if (qty <= 0) return removeItem(id)
    setCart((prev) => prev.map((i) => (i.product.id === id ? { ...i, qty } : i)))
  }

  const removeItem = (id: string) => setCart((prev) => prev.filter((i) => i.product.id !== id))

  const toggleWish = (id: string) =>
    setWishlist((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0)

  return (
    <div className="bg-cream text-ink min-h-screen">
      <Navbar cartCount={cartCount} wishCount={wishlist.size} onCartOpen={() => setCartOpen(true)} />
      <main>
        <Hero />
        <NewArrivals products={newArrivals} onAdd={addToCart} wishlist={wishlist} onToggleWish={toggleWish} />
        <Categories />
        <Brands />
        <Lookbook />
        <Bestsellers products={bestsellers} onAdd={addToCart} wishlist={wishlist} onToggleWish={toggleWish} />
        <About />
        <Reviews />
        <Newsletter />
        <InstagramRow />
      </main>
      <Footer />
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onUpdateQty={updateQty}
        onRemove={removeItem}
      />
      <StickyCart count={cartCount} onOpen={() => setCartOpen(true)} />
    </div>
  )
}

===== FILE: src/data/products.ts =====
export interface Product {
  id: string
  name: string
  brand: string
  price: number
  img: string
  imgAlt: string
}

export const newArrivals: Product[] = [
  {
    id: 'na-1',
    name: 'Silk Bias Slip Dress',
    brand: 'Vince',
    price: 248,
    img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80&auto=format&fit=crop',
    imgAlt: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'na-2',
    name: 'Puff Sleeve Blouse',
    brand: 'Velvet',
    price: 148,
    img: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=800&q=80&auto=format&fit=crop',
    imgAlt: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'na-3',
    name: 'Crochet Midi Dress',
    brand: 'Ulla Johnson',
    price: 325,
    img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80&auto=format&fit=crop',
    imgAlt: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'na-4',
    name: 'Tailored Wide-Leg Trouser',
    brand: 'Veronica Beard',
    price: 198,
    img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80&auto=format&fit=crop',
    imgAlt: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'na-5',
    name: 'Utility Field Jacket',
    brand: 'Rails',
    price: 178,
    img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80&auto=format&fit=crop',
    imgAlt: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80&auto=format&fit=crop',
  },
]

export const bestsellers: Product[] = [
  {
    id: 'bs-1',
    name: 'The Perfect Tee',
    brand: 'Rails',
    price: 68,
    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80&auto=format&fit=crop',
    imgAlt: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'bs-2',
    name: 'Floral Wrap Dress',
    brand: 'Free People',
    price: 128,
    img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80&auto=format&fit=crop',
    imgAlt: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'bs-3',
    name: 'Cashmere Cardigan',
    brand: 'Vince',
    price: 298,
    img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80&auto=format&fit=crop',
    imgAlt: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'bs-4',
    name: 'Denim Column Skirt',
    brand: 'Veronica Beard',
    price: 158,
    img: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80&auto=format&fit=crop',
    imgAlt: 'https://images.unsplash.com/photo-1495385794356-15371f348c31?w=800&q=80&auto=format&fit=crop',
  },
]

export const brands = ['Vince', 'Velvet', 'Ulla Johnson', 'Free People', 'Veronica Beard', 'Rails']

export interface Look {
  id: string
  img: string
  title: string
  description: string
  pieces: string[]
}

export const looks: Look[] = [
  {
    id: 'look-1',
    img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1000&q=80&auto=format&fit=crop',
    title: 'Look 01 — Golden Hour',
    description:
      'A silk slip layered under an open-weave cardigan, finished with a suede mule. Made for long dinners on the patio at Margot and slow Sunday mornings on 12th Ave.',
    pieces: ['Silk Bias Slip Dress', 'Cashmere Cardigan', 'Suede Mule'],
  },
  {
    id: 'look-2',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&q=80&auto=format&fit=crop',
    title: 'Look 02 — Gallery Weekend',
    description:
      'Crisp cotton poplin with a full skirt and sculptural gold. Sharp enough for the Frist, easy enough to wear straight through to drinks in Germantown.',
    pieces: ['Puff Sleeve Blouse', 'Denim Column Skirt', 'Sculptural Cuff'],
  },
  {
    id: 'look-3',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&q=80&auto=format&fit=crop',
    title: 'Look 03 — Layered & Easy',
    description:
      'The field jacket thrown over wide-leg tailoring — the Nashville uniform for weather that cannot make up its mind. Add a vintage band tee when it warms up.',
    pieces: ['Utility Field Jacket', 'Wide-Leg Trouser', 'Vintage Wash Tee'],
  },
]

export const instagramPhotos = [
  'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1495385794356-15371f348c31?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80&auto=format&fit=crop',
]

export const reviews = [
  {
    name: 'Maren K.',
    location: '12 South',
    quote:
      'The only boutique in Nashville where I walk in for one thing and leave with a whole new wardrobe. The styling advice is always spot on.',
  },
  {
    name: 'Jasmine T.',
    location: 'East Nashville',
    quote:
      'Every piece feels like it was picked just for me. My Ulla Johnson dress gets compliments every single time I wear it.',
  },
  {
    name: 'Colleen R.',
    location: 'Germantown',
    quote:
      'Warm, unpretentious, and beautifully curated. geeby Cleo is my first stop before every event — and most ordinary Tuesdays, too.',
  },
]

===== FILE: src/components/Icons.tsx =====
interface IconProps {
  className?: string
}

export const SearchIcon = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

export const HeartIcon = ({ className = 'w-5 h-5', filled = false }: IconProps & { filled?: boolean }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
  </svg>
)

export const BagIcon = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
)

export const MenuIcon = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="3" y1="7" x2="21" y2="7" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="17" x2="21" y2="17" />
  </svg>
)

export const CloseIcon = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="5" y1="5" x2="19" y2="19" />
    <line x1="19" y1="5" x2="5" y2="19" />
  </svg>
)

export const ArrowRightIcon = ({ className = 'w-4 h-4' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

export const ChevronLeftIcon = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

export const ChevronRightIcon = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

export const StarIcon = ({ className = 'w-4 h-4' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

export const MapPinIcon = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export const InstagramIcon = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

export const FacebookIcon = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

===== FILE: src/components/Navbar.tsx =====
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SearchIcon, HeartIcon, BagIcon, MenuIcon, CloseIcon } from './Icons'

interface NavbarProps {
  cartCount: number
  wishCount: number
  onCartOpen: () => void
}

const links = [
  { label: 'Shop', href: '#shop' },
  { label: 'New Arrivals', href: '#new-arrivals' },
  { label: 'Brands', href: '#brands' },
  { label: 'Sale', href: '#sale' },
]

export default function Navbar({ cartCount, wishCount, onCartOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const light = !scrolled && !menuOpen

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled || menuOpen ? 'bg-cream/90 backdrop-blur-md border-b border-ink/10' : 'bg-transparent'
        } ${light ? 'text-cream' : 'text-ink'}`}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="relative flex h-16 lg:h-20 items-center justify-between">
            {/* Left links (desktop) */}
            <nav className="hidden lg:flex items-center gap-8 flex-1">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[11px] font-medium uppercase tracking-mega hover:text-clay transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Hamburger (mobile) */}
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

            {/* Center logo */}
            <a
              href="#top"
              className="absolute left-1/2 -translate-x-1/2 font-display text-2xl lg:text-3xl tracking-[0.12em] whitespace-nowrap"
            >
              geeby&nbsp;Cleo
            </a>

            {/* Right icons */}
            <div className="flex items-center justify-end gap-1 lg:gap-3 flex-1">
              <button aria-label="Search" className="p-2 hover:text-clay transition-colors hidden sm:block">
                <SearchIcon />
              </button>
              <button aria-label="Wishlist" className="p-2 hover:text-clay transition-colors relative">
                <HeartIcon />
                {wishCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-clay text-cream text-[9px] font-semibold flex items-center justify-center">
                    {wishCount}
                  </span>
                )}
              </button>
              <button aria-label="Cart" onClick={onCartOpen} className="p-2 hover:text-clay transition-colors relative">
                <BagIcon />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-clay text-cream text-[9px] font-semibold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 inset-x-0 z-40 bg-cream border-b border-ink/10 lg:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-3xl tracking-wide text-ink hover:text-clay transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-4 border-t border-ink/10 flex items-center gap-4 text-ink">
                <button aria-label="Search" className="p-2">
                  <SearchIcon />
                </button>
                <span className="text-xs uppercase tracking-mega text-ink/50">Search the boutique</span>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

===== FILE: src/components/Hero.tsx =====
import { motion } from 'framer-motion'
import { ArrowRightIcon } from './Icons'

export default function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[560px] overflow-hidden bg-ink">
      {/* Ken Burns campaign image */}
      <img
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=2000&q=80&auto=format&fit=crop"
        alt="geeby Cleo fall campaign"
        className="kenburns absolute inset-0 w-full h-full object-cover object-[center_20%] opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/10" />

      {/* Editorial overlay */}
      <div className="relative z-10 h-full mx-auto max-w-7xl px-5 lg:px-8 flex flex-col justify-end pb-24 lg:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-cream/80 text-[11px] lg:text-xs font-medium uppercase tracking-mega mb-4"
        >
          Fall 2026 — The Nashville Edit
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-display text-cream text-[15vw] sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] tracking-[0.02em] max-w-4xl"
        >
          Curated Style,
          <br />
          Effortlessly Yours
        </motion.h1>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          href="#new-arrivals"
          className="group mt-8 inline-flex w-fit items-center gap-3 bg-clay text-cream px-8 py-4 text-xs font-semibold uppercase tracking-mega hover:bg-cream hover:text-ink transition-colors duration-300"
        >
          Shop New Arrivals
          <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.a>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
      >
        <div className="w-px h-12 bg-cream/40 overflow-hidden">
          <motion.div
            className="w-full h-1/2 bg-cream"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}

===== FILE: src/components/ProductCard.tsx =====
import { motion } from 'framer-motion'
import type { Product } from '../data/products'
import { HeartIcon } from './Icons'

interface ProductCardProps {
  product: Product
  onAdd: (p: Product) => void
  wished: boolean
  onToggleWish: (id: string) => void
  badge?: string
}

export default function ProductCard({ product, onAdd, wished, onToggleWish, badge }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55 }}
      className="group relative flex-none w-[68vw] sm:w-[42vw] lg:w-[23%] snap-start"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-sand/50">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <img
          src={product.imgAlt}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />

        {badge && (
          <span className="absolute top-3 left-3 bg-clay text-cream text-[10px] font-semibold uppercase tracking-[0.18em] px-3 py-1.5">
            {badge}
          </span>
        )}

        <button
          aria-label="Add to wishlist"
          onClick={() => onToggleWish(product.id)}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-colors ${
            wished ? 'bg-clay text-cream' : 'bg-cream/80 text-ink hover:bg-clay hover:text-cream'
          }`}
        >
          <HeartIcon className="w-4 h-4" filled={wished} />
        </button>

        <button
          onClick={() => onAdd(product)}
          className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-ink/90 text-cream text-[11px] font-semibold uppercase tracking-mega py-3.5 hover:bg-clay"
        >
          Add to Bag
        </button>
      </div>

      <div className="pt-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50 mb-1">{product.brand}</p>
          <h3 className="text-sm font-medium text-ink">{product.name}</h3>
        </div>
        <p className="font-tabular text-sm text-ink pt-4">${product.price}</p>
      </div>
    </motion.article>
  )
}

===== FILE: src/components/NewArrivals.tsx =====
import { useRef } from 'react'
import type { Product } from '../data/products'
import ProductCard from './ProductCard'
import { ChevronLeftIcon, ChevronRightIcon } from './Icons'

interface NewArrivalsProps {
  products: Product[]
  onAdd: (p: Product) => void
  wishlist: Set<string>
  onToggleWish: (id: string) => void
}

export default function NewArrivals({ products, onAdd, wishlist, onToggleWish }: NewArrivalsProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * trackRef.current.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <section id="new-arrivals" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-mega text-clay mb-3">Just Landed</p>
            <h2 className="font-display text-5xl lg:text-6xl tracking-[0.03em]">New Arrivals</h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
              className="p-3 border border-ink/15 hover:bg-ink hover:text-cream hover:border-ink transition-colors"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Scroll right"
              className="p-3 border border-ink/15 hover:bg-ink hover:text-cream hover:border-ink transition-colors"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar flex gap-5 lg:gap-6 overflow-x-auto snap-x snap-mandatory px-5 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))] pb-2"
      >
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAdd={onAdd}
            wished={wishlist.has(p.id)}
            onToggleWish={onToggleWish}
          />
        ))}
      </div>
    </section>
  )
}

===== FILE: src/components/Categories.tsx =====
import { motion } from 'framer-motion'
import { ArrowRightIcon } from './Icons'

const categories = [
  {
    title: 'Tops & Blouses',
    img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1200&q=80&auto=format&fit=crop',
  },
  {
    title: 'Dresses & Skirts',
    img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&q=80&auto=format&fit=crop',
  },
  {
    title: 'Outerwear & Layers',
    img: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=1200&q=80&auto=format&fit=crop',
  },
]

export default function Categories() {
  return (
    <section id="shop" className="flex flex-col md:flex-row">
      {categories.map((c, i) => (
        <motion.a
          key={c.title}
          href="#new-arrivals"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: i * 0.12 }}
          className="group relative h-[70vh] md:h-screen md:min-h-[640px] overflow-hidden flex-1"
        >
          <img
            src={c.img}
            alt={c.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-70" />
          <div className="absolute inset-x-6 bottom-6 lg:inset-x-10 lg:bottom-10">
            <div className="bg-cream p-6 lg:p-8 flex items-center justify-between gap-4 transition-colors duration-500 group-hover:bg-ink group-hover:text-cream">
              <h3 className="font-display text-2xl lg:text-3xl tracking-[0.04em]">{c.title}</h3>
              <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-mega">
                Shop
                <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </motion.a>
      ))}
    </section>
  )
}

===== FILE: src/components/Brands.tsx =====
import { motion } from 'framer-motion'
import { brands } from '../data/products'

export default function Brands() {
  return (
    <section id="brands" className="py-20 lg:py-28 border-y border-ink/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[11px] font-medium uppercase tracking-mega text-ink/50 mb-12"
        >
          Curated Brands We Love
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:gap-x-16">
          {brands.map((b, i) => (
            <motion.span
              key={b}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="font-display text-3xl lg:text-5xl tracking-[0.05em] text-ink/70 hover:text-clay transition-colors duration-300 cursor-default"
            >
              {b}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}

===== FILE: src/components/Lookbook.tsx =====
import { motion } from 'framer-motion'
import { looks } from '../data/products'
import { ArrowRightIcon } from './Icons'

export default function Lookbook() {
  return (
    <section id="lookbook" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 lg:mb-20">
          <p className="text-[11px] font-medium uppercase tracking-mega text-clay mb-3">The Lookbook</p>
          <h2 className="font-display text-5xl lg:text-6xl tracking-[0.03em]">Styled by geeby Cleo</h2>
        </div>

        <div className="flex flex-col gap-20 lg:gap-28">
          {looks.map((look, i) => (
            <div
              key={look.id}
              className={`flex flex-col gap-8 lg:gap-16 lg:items-center ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
                className="lg:w-1/2 overflow-hidden"
              >
                <img
                  src={look.img}
                  alt={look.title}
                  loading="lazy"
                  className="w-full h-[60vh] lg:h-[75vh] object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="lg:w-1/2 lg:px-8"
              >
                <h3 className="font-display text-4xl lg:text-5xl tracking-[0.04em] mb-5">{look.title}</h3>
                <p className="text-ink/70 leading-relaxed max-w-md mb-8">{look.description}</p>
                <ul className="mb-10 space-y-2">
                  {look.pieces.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-ink/80">
                      <span className="w-6 h-px bg-clay" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#new-arrivals"
                  className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-mega text-clay border-b border-clay pb-2 hover:text-ink hover:border-ink transition-colors"
                >
                  Shop This Look
                  <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

===== FILE: src/components/Bestsellers.tsx =====
import type { Product } from '../data/products'
import ProductCard from './ProductCard'

interface BestsellersProps {
  products: Product[]
  onAdd: (p: Product) => void
  wishlist: Set<string>
  onToggleWish: (id: string) => void
}

export default function Bestsellers({ products, onAdd, wishlist, onToggleWish }: BestsellersProps) {
  return (
    <section id="sale" className="py-20 lg:py-28 bg-sand/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-end justify-between mb-10 lg:mb-14">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-mega text-clay mb-3">
              Community Favorites — up to 40% off select styles
            </p>
            <h2 className="font-display text-5xl lg:text-6xl tracking-[0.03em]">Bestsellers</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAdd={onAdd}
              wished={wishlist.has(p.id)}
              onToggleWish={onToggleWish}
              badge="Bestseller"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

===== FILE: src/components/About.tsx =====
import { motion } from 'framer-motion'
import { MapPinIcon } from './Icons'

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] font-medium uppercase tracking-mega text-clay mb-3">Our Story</p>
          <h2 className="font-display text-5xl lg:text-6xl tracking-[0.03em] mb-6">A Boutique Built on Intuition</h2>
          <p className="text-ink/70 leading-relaxed mb-5">
            geeby Cleo opened its doors on 12th Avenue South with a simple belief: getting dressed should feel
            like the easiest, most joyful part of your day. We hunt down the pieces you will reach for again and
            again — silk that drapes just right, denim that fits like it was made for you, layers that move with
            Nashville's ever-changing weather.
          </p>
          <p className="text-ink/70 leading-relaxed mb-10">
            Every brand on our racks is chosen by hand, in small batches, with an eye for quality over quantity.
            Come say hello — the fitting rooms are warm and the coffee is always on.
          </p>
          <div className="flex items-start gap-4 border-t border-ink/10 pt-8">
            <MapPinIcon className="w-5 h-5 text-clay mt-0.5 flex-none" />
            <div>
              <p className="font-medium text-sm">2907 12th Ave S, Nashville, TN 37204</p>
              <p className="text-sm text-ink/60 mt-1">Open Mon–Sat 10–6, Sun 12–5</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=80&auto=format&fit=crop"
            alt="Inside the geeby Cleo boutique"
            loading="lazy"
            className="w-full h-[60vh] lg:h-[75vh] object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}

===== FILE: src/components/Reviews.tsx =====
import { motion } from 'framer-motion'
import { reviews } from '../data/products'
import { StarIcon } from './Icons'

export default function Reviews() {
  return (
    <section className="py-20 lg:py-28 border-t border-ink/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[11px] font-medium uppercase tracking-mega text-clay mb-3">Word of Mouth</p>
          <h2 className="font-display text-5xl lg:text-6xl tracking-[0.03em]">Loved in Nashville</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-sand/50 p-8 flex flex-col"
            >
              <div className="flex gap-1 text-clay mb-5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <StarIcon key={s} />
                ))}
              </div>
              <blockquote className="text-ink/80 leading-relaxed flex-1">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-ink/10">
                <p className="text-sm font-semibold">{r.name}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-ink/50 mt-1">{r.location}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

===== FILE: src/components/Newsletter.tsx =====
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from './Icons'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) setDone(true)
  }

  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-2xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl lg:text-6xl tracking-[0.03em] mb-4">Be the First to Know</h2>
          <p className="text-ink/70 mb-10">
            New arrivals, restocks, and Nashville-only events — straight to your inbox, never more than twice a month.
          </p>
          {done ? (
            <p className="text-sm font-semibold uppercase tracking-mega text-clay">
              Welcome to the list — see you soon.
            </p>
          ) : (
            <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-cream border border-ink/15 px-5 py-4 text-sm outline-none focus:border-clay transition-colors placeholder:text-ink/40"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 bg-ink text-cream px-7 py-4 text-xs font-semibold uppercase tracking-mega hover:bg-clay transition-colors"
              >
                Sign Up
                <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

===== FILE: src/components/InstagramRow.tsx =====
import { motion } from 'framer-motion'
import { instagramPhotos } from '../data/products'
import { InstagramIcon } from './Icons'

export default function InstagramRow() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[11px] font-medium uppercase tracking-mega text-ink/50 mb-3">Follow Along</p>
          <a href="#top" className="inline-flex items-center gap-3 font-display text-4xl lg:text-5xl tracking-[0.05em] hover:text-clay transition-colors">
            <InstagramIcon className="w-7 h-7" />
            @geebycleo
          </a>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 lg:gap-3">
          {instagramPhotos.map((src, i) => (
            <motion.a
              key={src}
              href="#top"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative aspect-square overflow-hidden bg-sand/50"
            >
              <img
                src={src}
                alt="geeby Cleo on Instagram"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-clay/0 group-hover:bg-clay/30 transition-colors duration-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

===== FILE: src/components/Footer.tsx =====
import { MapPinIcon, InstagramIcon, FacebookIcon } from './Icons'

const columns = [
  {
    title: 'Shop',
    links: ['New Arrivals', 'Tops & Blouses', 'Dresses & Skirts', 'Outerwear & Layers', 'Sale'],
  },
  {
    title: 'Help',
    links: ['Shipping & Returns', 'Size Guide', 'Gift Cards', 'Contact Us'],
  },
  {
    title: 'The Boutique',
    links: ['Our Story', 'Lookbook', 'Reviews', 'Journal'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-4xl tracking-[0.1em] text-cream mb-5">geeby Cleo</p>
            <p className="text-sm leading-relaxed max-w-sm mb-8">
              A women's clothing boutique in the heart of 12 South, Nashville. Curated style,
              effortlessly yours — in store and online.
            </p>
            <div className="flex items-center gap-3 text-sm">
              <MapPinIcon className="w-4 h-4 text-clay flex-none" />
              2907 12th Ave S, Nashville, TN 37204
            </div>
            <div className="flex gap-3 mt-8">
              <a href="#top" aria-label="Instagram" className="p-3 border border-cream/20 hover:border-clay hover:text-clay transition-colors">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="#top" aria-label="Facebook" className="p-3 border border-cream/20 hover:border-clay hover:text-clay transition-colors">
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <p className="text-[11px] font-semibold uppercase tracking-mega text-cream mb-6">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#top" className="text-sm hover:text-clay transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} geeby Cleo, Nashville TN. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-clay transition-colors">Privacy</a>
            <a href="#top" className="hover:text-clay transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

===== FILE: src/components/CartDrawer.tsx =====
import { AnimatePresence, motion } from 'framer-motion'
import type { Product } from '../data/products'
import { CloseIcon } from './Icons'

export interface CartItem {
  product: Product
  qty: number
}

interface CartDrawerProps {
  open: boolean
  onClose: () => void
  items: CartItem[]
  onUpdateQty: (id: string, qty: number) => void
  onRemove: (id: string) => void
}

export default function CartDrawer({ open, onClose, items, onUpdateQty, onRemove }: CartDrawerProps) {
  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.qty, 0)

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-ink/50 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
            className="fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-cream flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-ink/10">
              <h2 className="font-display text-3xl tracking-[0.05em]">Your Bag</h2>
              <button onClick={onClose} aria-label="Close cart" className="p-2 hover:text-clay transition-colors">
                <CloseIcon />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                  <p className="font-display text-3xl tracking-wide text-ink/60">Your bag is empty</p>
                  <button
                    onClick={onClose}
                    className="text-xs font-semibold uppercase tracking-mega text-clay border-b border-clay pb-1"
                  >
                    Keep Browsing
                  </button>
                </div>
              ) : (
                items.map(({ product, qty }) => (
                  <div key={product.id} className="flex gap-4">
                    <img src={product.img} alt={product.name} className="w-20 h-24 object-cover bg-sand/50" />
                    <div className="flex-1">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-ink/50">{product.brand}</p>
                      <p className="text-sm font-medium">{product.name}</p>
                      <p className="font-tabular text-sm mt-1">${product.price}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => onUpdateQty(product.id, qty - 1)}
                          className="w-7 h-7 border border-ink/15 hover:border-ink transition-colors text-sm"
                        >
                          −
                        </button>
                        <span className="font-tabular text-sm w-4 text-center">{qty}</span>
                        <button
                          onClick={() => onUpdateQty(product.id, qty + 1)}
                          className="w-7 h-7 border border-ink/15 hover:border-ink transition-colors text-sm"
                        >
                          +
                        </button>
                        <button
                          onClick={() => onRemove(product.id)}
                          className="ml-auto text-xs text-ink/50 hover:text-clay underline underline-offset-2 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="px-6 py-6 border-t border-ink/10">
                <div className="flex justify-between mb-5">
                  <span className="text-sm text-ink/60">Subtotal</span>
                  <span className="font-tabular font-semibold">${subtotal}</span>
                </div>
                <button className="w-full bg-ink text-cream py-4 text-xs font-semibold uppercase tracking-mega hover:bg-clay transition-colors">
                  Checkout
                </button>
                <p className="text-center text-xs text-ink/50 mt-3">Free shipping on orders over $150</p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

===== FILE: src/components/StickyCart.tsx =====
import { motion, AnimatePresence } from 'framer-motion'
import { BagIcon } from './Icons'

interface StickyCartProps {
  count: number
  onOpen: () => void
}

export default function StickyCart({ count, onOpen }: StickyCartProps) {
  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          onClick={onOpen}
          aria-label="Open cart"
          className="md:hidden fixed bottom-5 right-5 z-50 bg-ink text-cream rounded-full p-4 shadow-xl shadow-ink/30"
        >
          <BagIcon />
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-clay text-[10px] font-semibold flex items-center justify-center">
            {count}
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

