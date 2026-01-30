export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  createdAt: Date;
  vendorId: string;
}

export interface Vendor {
  id: string;
  slug: string;
  name: string;
  logo: string;
  heroImage: string;
  description: string;
  brandColor: string;
  products: Product[];
}

export interface SearchParams {
  search?: string;
  sort?: "price-asc" | "price-desc" | "newest";
  page?: string;
}
