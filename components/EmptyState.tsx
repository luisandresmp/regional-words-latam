interface EmptyStateProps {
  message: string
  description?: string
}

export default function EmptyState({ message, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="text-6xl mb-4">🔍</div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
        {message}
      </h3>
      {description && (
        <p className="text-lg text-gray-600 max-w-md">
          {description}
        </p>
      )}
    </div>
  )
}