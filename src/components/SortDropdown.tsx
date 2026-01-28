'use client';

import { useCallback } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

type SortOption = 'price-asc' | 'price-desc' | 'newest';

interface SortDropdownProps {
  brandColor: string;
}

export function SortDropdown({ brandColor }: SortDropdownProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentSort = (searchParams.get('sort') as SortOption) || 'newest';

  const handleSort = useCallback(
    (sort: SortOption) => {
      const params = new URLSearchParams(searchParams);
      params.set('sort', sort);
      params.set('page', '1'); // Reset to first page on sort change
      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, router, pathname]
  );

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sort" className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Sort by:
      </label>
      <select
        id="sort"
        value={currentSort}
        onChange={(e) => handleSort(e.target.value as SortOption)}
        className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white cursor-pointer focus:outline-none focus:ring-2 transition-all"
        style={{
          focusRing: `2px solid ${brandColor}`,
        }}
      >
        <option value="newest">Newest</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  );
}
