import { Product } from "@/types";

export function searchProducts(products: Product[], query: string): Product[] {
  if (!query.trim()) return products;

  const lowerQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery),
  );
}

export function sortProducts(
  products: Product[],
  sortBy: "price-asc" | "price-desc" | "newest" = "newest",
): Product[] {
  const sorted = [...products];

  switch (sortBy) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "newest":
    default:
      return sorted.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
  }
}

export interface PaginationResult<T> {
  items: T[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export function paginateProducts(
  products: Product[],
  page: number = 1,
  itemsPerPage: number = 12,
): PaginationResult<Product> {
  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentPage = Math.max(1, Math.min(page, totalPages || 1));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return {
    items: products.slice(startIndex, endIndex),
    totalItems,
    totalPages,
    currentPage,
    hasNextPage: currentPage < totalPages,
    hasPreviousPage: currentPage > 1,
  };
}

export function processProducts(
  products: Product[],
  searchQuery: string = "",
  sortBy: "price-asc" | "price-desc" | "newest" = "newest",
  page: number = 1,
  itemsPerPage: number = 12,
): PaginationResult<Product> {
  let filtered = searchProducts(products, searchQuery);
  let sorted = sortProducts(filtered, sortBy);
  return paginateProducts(sorted, page, itemsPerPage);
}
