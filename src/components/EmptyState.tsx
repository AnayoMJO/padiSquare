"use client";

interface EmptyStateProps {
  title: string;
  description: string;
  onReset?: () => void;
  brandColor: string;
}

export function EmptyState({
  title,
  description,
  onReset,
  brandColor,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="text-5xl mb-4">📭</div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-center max-w-md mb-6">
        {description}
      </p>
      {onReset && (
        <button
          onClick={onReset}
          className="px-6 py-2 rounded-lg text-white font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: brandColor }}
        >
          Clear Filters
        </button>
      )}
    </div>
  );
}
