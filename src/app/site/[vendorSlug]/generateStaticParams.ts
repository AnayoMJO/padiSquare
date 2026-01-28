import { getAllVendorSlugs } from '@/data/vendors';

export function generateStaticParams() {
  return getAllVendorSlugs().map((slug) => ({
    vendorSlug: slug,
  }));
}
