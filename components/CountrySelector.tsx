'use client'

import { useState, useEffect, useRef } from 'react'
import ReactCountryFlag from 'react-country-flag'

interface Country {
  code: string
  name: string
  flag: string
}

interface CountrySelectorProps {
  countries: Country[]
  value: string
  onChange: (value: string) => void
  label: string
  ariaLabel: string
}

export default function CountrySelector({ 
  countries, 
  value, 
  onChange, 
  label, 
  ariaLabel 
}: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const selectedCountry = countries.find(c => c.code === value)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg font-medium">
        {label}
      </label>
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={ariaLabel}
          className="h-12 px-4 text-lg border-2 border-gray-300 rounded-lg bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 w-full text-left flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            {selectedCountry ? (
              <>
                <ReactCountryFlag
                  countryCode={selectedCountry.code}
                  svg
                  style={{ width: '1.5em', height: '1.5em' }}
                />
                <span>{selectedCountry.name}</span>
              </>
            ) : (
              <span className="text-gray-500">Seleccionar país</span>
            )}
          </div>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border-2 border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            <button
              type="button"
              onClick={() => {
                onChange('')
                setIsOpen(false)
              }}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 text-gray-500"
            >
              Seleccionar país
            </button>
            {countries.map((country) => (
              <button
                key={country.code}
                type="button"
                onClick={() => {
                  onChange(country.code)
                  setIsOpen(false)
                }}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 flex items-center gap-3"
              >
                <ReactCountryFlag
                  countryCode={country.code}
                  svg
                  style={{ width: '1.5em', height: '1.5em' }}
                />
                <span>{country.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}