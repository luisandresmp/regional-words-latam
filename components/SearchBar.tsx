'use client'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg font-medium" htmlFor="search">
        Buscar corte
      </label>
      <div className="relative">
        <input
          id="search"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Escribe el nombre del corte..."
          aria-label="Buscar corte de carne"
          className="w-full h-12 px-4 pr-12 text-lg border-2 border-gray-300 rounded-lg bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            aria-label="Limpiar búsqueda"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}