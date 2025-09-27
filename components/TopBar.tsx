'use client'

import { useState, useEffect } from 'react'
import CountrySelector from './CountrySelector'
import SearchBar from './SearchBar'

interface Country {
  code: string
  name: string
  flag: string
}

interface TopBarProps {
  countries: Country[]
  fromCountry: string
  toCountry: string
  searchTerm: string
  onFromCountryChange: (value: string) => void
  onToCountryChange: (value: string) => void
  onSearchChange: (value: string) => void
}

export default function TopBar({
  countries,
  fromCountry,
  toCountry,
  searchTerm,
  onFromCountryChange,
  onToCountryChange,
  onSearchChange
}: TopBarProps) {
  const [isHighContrast, setIsHighContrast] = useState(false)
  const [fontSize, setFontSize] = useState('normal')

  useEffect(() => {
    // Cargar preferencias del localStorage
    const savedContrast = localStorage.getItem('highContrast') === 'true'
    const savedFontSize = localStorage.getItem('fontSize') || 'normal'
    
    setIsHighContrast(savedContrast)
    setFontSize(savedFontSize)
    
    // Aplicar clases al body
    if (savedContrast) {
      document.body.classList.add('high-contrast')
    }
    document.body.classList.add(`font-size-${savedFontSize}`)
  }, [])

  const toggleHighContrast = () => {
    const newValue = !isHighContrast
    setIsHighContrast(newValue)
    localStorage.setItem('highContrast', newValue.toString())
    
    if (newValue) {
      document.body.classList.add('high-contrast')
    } else {
      document.body.classList.remove('high-contrast')
    }
  }

  const changeFontSize = (newSize: string) => {
    // Remover clase anterior
    document.body.classList.remove(`font-size-${fontSize}`)
    
    setFontSize(newSize)
    localStorage.setItem('fontSize', newSize)
    
    // Aplicar nueva clase
    if (newSize !== 'normal') {
      document.body.classList.add(`font-size-${newSize}`)
    }
  }

  return (
    <div className="sticky top-0 z-10 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto p-4 space-y-4">
        {/* Título */}
        <h1 className="text-2xl font-bold text-center text-gray-900">
          🥩 Traducciones LATAM
        </h1>
        
        {/* Controles de accesibilidad */}
        <div className="flex flex-wrap justify-center gap-4 pb-4 border-b border-gray-200">
          <button
            onClick={toggleHighContrast}
            aria-pressed={isHighContrast}
            className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"
          >
            {isHighContrast ? '🌞' : '🌙'} Alto contraste
          </button>
          
          <div className="flex gap-1">
            <button
              onClick={() => changeFontSize('small')}
              aria-pressed={fontSize === 'small'}
              className="px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"
            >
              A-
            </button>
            <button
              onClick={() => changeFontSize('normal')}
              aria-pressed={fontSize === 'normal'}
              className="px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"
            >
              A
            </button>
            <button
              onClick={() => changeFontSize('large')}
              aria-pressed={fontSize === 'large'}
              className="px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"
            >
              A+
            </button>
            <button
              onClick={() => changeFontSize('xlarge')}
              aria-pressed={fontSize === 'xlarge'}
              className="px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"
            >
              A++
            </button>
          </div>
        </div>
        
        {/* Selectores y búsqueda */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CountrySelector
            countries={countries}
            value={fromCountry}
            onChange={onFromCountryChange}
            label="De:"
            ariaLabel="Seleccionar país de origen"
          />
          
          <CountrySelector
            countries={countries}
            value={toCountry}
            onChange={onToCountryChange}
            label="A:"
            ariaLabel="Seleccionar país de destino"
          />
          
          <SearchBar
            value={searchTerm}
            onChange={onSearchChange}
          />
        </div>
      </div>
    </div>
  )
}