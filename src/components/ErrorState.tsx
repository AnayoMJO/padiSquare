'use client';

interface ErrorStateProps {
  title: string;
  description: string;
  onRetry?: () => void;
  brandColor: string;
}

export function ErrorState({
  title,
  description,
  onRetry,
  brandColor,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="text-5xl mb-4">⚠️</div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-center max-w-md mb-6">
        {description}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-2 rounded-lg text-white font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: brandColor }}
        >
          Try Again
        </button>
      )}
    </div>
  );
}
