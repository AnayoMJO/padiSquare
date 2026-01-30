"use client";

import Image from "next/image";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  brandColor: string;
}

export function ProductCard({ product, brandColor }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return (
    <div className="group rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200 dark:border-gray-700 dark:hover:border-gray-600">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col h-48">
        {/* Category Badge */}
        <div className="mb-2">
          <span
            className="inline-block px-2 py-1 rounded-full text-xs font-semibold text-white"
            style={{ backgroundColor: brandColor }}
          >
            {product.category}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 line-clamp-2 grow">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="mt-auto pt-3 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xl font-bold" style={{ color: brandColor }}>
            {formattedPrice}
          </p>
        </div>
      </div>
    </div>
  );
}
