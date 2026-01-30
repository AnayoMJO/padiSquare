# Padisquare - Multi-Vendor Mini Sites

A modern, responsive Next.js application showcasing a multi-vendor marketplace where vendors can generate their own storefronts.

## 🎯 Features

### Core Features

- **Multi-Tenant Routing**: Dynamic vendor routes at `/site/[vendorSlug]`
- **Product Search**: Real-time search across product names, descriptions, and categories
- **Smart Sorting**: Sort by price (ascending/descending) or newest first
- **Pagination**: Clean, intuitive pagination with page navigation
- **Loading States**: Skeleton loaders for better UX
- **Empty States**: User-friendly messages when no products match search
- **Error States**: Graceful error handling
- **SEO Optimized**: Full metadata management per vendor page
- **Dark Mode**: Complete dark mode support with OS preference detection
- **Fully Responsive**: Mobile-first design for all screen sizes

## 🛠️ Tech Stack

- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS with dark mode support
- **Font**: Geist Sans and Mono from Vercel
- **Image Optimization**: Next.js Image component
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page with vendor grid
│   ├── not-found.tsx           # Custom 404 page
│   ├── globals.css             # Global styles
│   └── site/
│       └── [vendorSlug]/
│           ├── page.tsx        # Dynamic vendor page
│           └── generateStaticParams.ts  # Static generation config
├── components/
│   ├── ProductCard.tsx         # Individual product card
│   ├── SearchBar.tsx           # Search input with real-time filtering
│   ├── SortDropdown.tsx        # Sorting selector
│   ├── Pagination.tsx          # Page navigation
│   ├── EmptyState.tsx          # Empty state UI
│   ├── LoadingState.tsx        # Loading skeleton
│   ├── ErrorState.tsx          # Error fallback UI
│   └── index.ts                # Component exports
├── data/
│   └── vendors.ts              # Mock vendor and product data
├── lib/
│   └── products.ts             # Product utilities (search, sort, paginate)
└── types/
    └── index.ts                # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17+ or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AnayoMJO/padi-square.git
cd padisquare
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## 🎨 Design Decisions

### 1. **Server Components First**

We leverage Next.js Server Components for data fetching and SEO, minimizing client-side JavaScript while using Client Components only where interactivity is needed (SearchBar, SortDropdown, Pagination).

### 2. **Mock Data Architecture**

Products and vendor data are stored in `src/data/vendors.ts` as a JSON-like structure. This can be easily swapped with API calls:

```typescript
// Current: Local mock data
const vendor = getVendorBySlug(slug);

// Could be replaced with:
const vendor = await fetch(`/api/vendors/${slug}`);
```

### 3. **Search & Filter Pipeline**

All filtering happens on the server initially, then client-side pagination controls the view. This hybrid approach:

- Reduces server load for pagination
- Maintains URL state for bookmarking
- Provides instant client feedback for pagination

### 4. **Brand Color System**

Each vendor has a `brandColor` that extends throughout their storefront:

- Category badges
- CTA buttons
- Active pagination button
- Focus ring on interactive elements

### 5. **Image Optimization**

We use Next.js `Image` component with proper sizing for:

- Automatic format optimization (WebP, AVIF)
- Lazy loading for below-the-fold images
- Responsive image serving
- Build-time validation

### 6. **Dark Mode Implementation**

- Tailwind's dark mode class strategy with `prefers-color-scheme` fallback
- Consistent color palette for both themes
- `suppressHydrationWarning` in root HTML to prevent hydration mismatches

### 7. **Responsive Design**

Mobile-first approach with Tailwind breakpoints:

- `sm`: 640px - Tablet
- `md`: 768px - Small desktop
- `lg`: 1024px - Large desktop
- `xl`: 1280px - Extra large desktop

### 8. **URL-Based State Management**

Search, sort, and pagination state live in URL search params:

- Enables bookmarking and sharing
- Works without JavaScript (graceful degradation)
- Automatic page reset on filter changes

## 📊 Sample Data

The application includes 3 vendors with 8 products each:

1. **Tea House Premium** (`tea-house`)
   - Specialty teas and beverages
   - 8 products with various price points

2. **TechHub Store** (`tech-store`)
   - Electronics and accessories
   - 8 tech gadgets and peripherals

3. **FitLife Store** (`fit-life`)
   - Fitness and wellness equipment
   - 8 workout and health products

## 🎯 Feature Implementations

### Product Search

- Case-insensitive search
- Searches product name, description, and category
- Real-time filtering with URL updates
- Clear button for easy reset

### Sorting Options

1. **Newest First** - Products sorted by creation date (default)
2. **Price: Low to High** - Ascending price order
3. **Price: High to Low** - Descending price order

### Pagination

- 12 products per page (configurable)
- Smart page number display with ellipsis
- Previous/Next navigation buttons
- Current page highlighting with brand color
- Page info display

### Loading States

- Skeleton screens matching product card layout
- Smooth fade animation
- 12-item placeholder grid

### Error Handling

- 404 page for invalid vendor slugs
- User-friendly error messages
- Clear action buttons for recovery

## 🔍 SEO Features

Each vendor page includes:

- Dynamic `<title>` with vendor name
- Meta descriptions
- Open Graph tags for social sharing
- Twitter Card metadata
- Responsive image previews
- Canonical URL structure

## 🌙 Dark Mode

Dark mode is fully supported with:

- System preference detection
- Persistent color scheme across app
- All components styled for both themes
- No flickering on page load

## 🚀 Deployment

### Vercel (Recommended)

1. Push your repository to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel auto-detects Next.js settings
5. Deploy with one click

```bash
# Or deploy from CLI
npm i -g vercel
vercel
```

### Other Platforms

The app can also be deployed to:

- **Netlify**: Through Next.js adapter
- **AWS Amplify**: Native Next.js support
- **Railway**: Zero-config deployment
- **Docker**: Custom containerization

## 📈 Performance Optimizations

1. **Image Optimization**: Next.js Image component
2. **Static Generation**: Vendor pages pre-built at build time
3. **Code Splitting**: Automatic per-route splitting
4. **CSS Optimization**: TailwindCSS purging unused styles
5. **Font Optimization**: System fonts + Geist via next/font

## 🔄 Bonus Features

### Dark Mode ✅

Complete dark mode implementation with Tailwind CSS:

- Automatic detection of system preferences
- All components fully styled for both themes
- Smooth transitions between themes

### Data Revalidation

Ready for ISR (Incremental Static Regeneration):

```typescript
export const revalidate = 60; // Revalidate every 60 seconds
```

## 🛣️ Routing Map

- `/` - Home page (all vendors)
- `/site/[vendorSlug]` - Individual vendor storefront
- `/404` - Not found page

## 🔧 Customization

### Adding a New Vendor

1. Edit `src/data/vendors.ts`:

```typescript
{
  id: 'vendor4',
  slug: 'my-store',
  name: 'My Store',
  logo: 'https://...',
  heroImage: 'https://...',
  description: 'Store description',
  brandColor: '#159C47',
  products: [/* products */],
}
```

2. Products are auto-generated with new routes

### Changing Items Per Page

Edit `src/lib/products.ts`:

```typescript
export function processProducts(
  // ...
  itemsPerPage: number = 12, // Change this value
);
```

### Updating Brand Colors

Each vendor has its own `brandColor`. To use globally, update in:

- `src/data/vendors.ts` - Per vendor
- `tailwind.config.ts` - For theme colors

## 🐛 Known Limitations

1. **Mock Data Only**: Currently uses local data (no database)
2. **Single Language**: English only (no i18n)
3. **Static Vendors**: Vendor list set at build time
4. **No User Auth**: No authentication system

## 🚦 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication
- [ ] Shopping cart functionality
- [ ] Order management
- [ ] Vendor analytics dashboard
- [ ] Product reviews and ratings
- [ ] Multi-language support
- [ ] Advanced filtering options
- [ ] Wishlist/favorites
- [ ] Email notifications

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 👨‍💻 Author

Built as part of the Padisquare assignment

## 🤝 Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Brand Color**: #159C47 🎨
**Last Updated**: January 2026
