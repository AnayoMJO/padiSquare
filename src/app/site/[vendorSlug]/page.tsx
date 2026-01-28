import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getVendorBySlug } from '@/data/vendors';
import { processProducts } from '@/lib/products';
import {
  ProductCard,
  SearchBar,
  SortDropdown,
  Pagination,
  EmptyState,
} from '@/components';

interface PageProps {
  params: Promise<{
    vendorSlug: string;
  }>;
  searchParams: Promise<{
    search?: string;
    sort?: 'price-asc' | 'price-desc' | 'newest';
    page?: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { vendorSlug } = await params;
  const vendor = getVendorBySlug(vendorSlug);

  if (!vendor) {
    return {
      title: 'Vendor Not Found',
      description: 'The requested vendor does not exist.',
    };
  }

  return {
    title: `${vendor.name} | Padisquare`,
    description: vendor.description,
    openGraph: {
      title: vendor.name,
      description: vendor.description,
      images: [
        {
          url: vendor.heroImage,
          width: 1200,
          height: 600,
          alt: vendor.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: vendor.name,
      description: vendor.description,
      images: [vendor.heroImage],
    },
  };
}

export default async function VendorPage({
  params,
  searchParams,
}: PageProps) {
  const { vendorSlug } = await params;
  const { search = '', sort = 'newest', page = '1' } = await searchParams;

  const vendor = getVendorBySlug(vendorSlug);

  if (!vendor) {
    notFound();
  }

  const currentPage = Math.max(1, parseInt(page));
  const result = processProducts(
    vendor.products,
    search,
    sort as 'price-asc' | 'price-desc' | 'newest',
    currentPage,
    12
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-72 md:h-96 w-full overflow-hidden">
        <Image
          src={vendor.heroImage}
          alt={vendor.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />

        {/* Logo and Name Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="relative h-24 w-24 sm:h-32 sm:w-32 mb-4">
            <Image
              src={vendor.logo}
              alt={`${vendor.name} logo`}
              fill
              className="object-cover rounded-full border-4 border-white"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {vendor.name}
          </h1>
          <p className="text-white/90 text-sm sm:text-base mt-2 max-w-2xl px-4">
            {vendor.description}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Search and Filter Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="sm:col-span-2">
            <SearchBar brandColor={vendor.brandColor} />
          </div>
          <div className="sm:col-span-1">
            <SortDropdown brandColor={vendor.brandColor} />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
          Showing{' '}
          <span className="font-semibold">
            {result.items.length > 0
              ? (result.currentPage - 1) * 12 + 1
              : 0}
            -
            {Math.min(result.currentPage * 12, result.totalItems)}
          </span>{' '}
          of <span className="font-semibold">{result.totalItems}</span> products
        </div>

        {/* Product Grid or Empty State */}
        {result.items.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {result.items.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  brandColor={vendor.brandColor}
                />
              ))}
            </div>

            {/* Pagination */}
            {result.totalPages > 1 && (
              <Pagination
                currentPage={result.currentPage}
                totalPages={result.totalPages}
                hasNextPage={result.hasNextPage}
                hasPreviousPage={result.hasPreviousPage}
                brandColor={vendor.brandColor}
              />
            )}
          </>
        ) : (
          <EmptyState
            title="No Products Found"
            description={
              search
                ? `No products match your search "${search}". Try different keywords.`
                : 'No products available in this category.'
            }
            onReset={
              search
                ? () => {
                    // This will be handled by the SearchBar clear function
                  }
                : undefined
            }
            brandColor={vendor.brandColor}
          />
        )}
      </div>
    </div>
  );
}
