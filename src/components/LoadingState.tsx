"use client";

export function LoadingState() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 animate-pulse"
        >
          {/* Image Skeleton */}
          <div className="h-48 bg-gray-200 dark:bg-gray-700" />

          {/* Content Skeleton */}
          <div className="p-4 space-y-3">
            {/* Category */}
            <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded-full" />

            {/* Title */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full" />
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
            </div>

            {/* Price */}
            <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
              <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
