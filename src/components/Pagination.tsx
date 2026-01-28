'use client';

import { useCallback } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  brandColor: string;
}

export function Pagination({
  currentPage,
  totalPages,
  hasNextPage,
  hasPreviousPage,
  brandColor,
}: PaginationProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const goToPage = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams);
      params.set('page', String(page));
      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, router, pathname]
  );

  // Generate page numbers to display
  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (i == 1 || i == totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    range.forEach((i) => {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    });

    return rangeWithDots;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
      {/* Previous Button */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={!hasPreviousPage}
        className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed hover:enabled:bg-gray-100 dark:hover:enabled:bg-gray-700 transition-colors"
      >
        ← Previous
      </button>

      {/* Page Numbers */}
      <div className="flex gap-1">
        {pageNumbers.map((page, idx) => (
          <div key={idx}>
            {page === '...' ? (
              <span className="px-3 py-2 text-gray-600 dark:text-gray-400">...</span>
            ) : (
              <button
                onClick={() => goToPage(page as number)}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  currentPage === page
                    ? 'text-white font-semibold'
                    : 'border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                style={
                  currentPage === page
                    ? { backgroundColor: brandColor }
                    : undefined
                }
              >
                {page}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={!hasNextPage}
        className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed hover:enabled:bg-gray-100 dark:hover:enabled:bg-gray-700 transition-colors"
      >
        Next →
      </button>

      {/* Page Info */}
      <div className="w-full text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
}
