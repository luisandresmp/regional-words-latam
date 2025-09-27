'use client'

import { useState, useEffect, useMemo } from 'react'
import TopBar from '../components/TopBar'
import CutsGrid from '../components/CutsGrid'
import EmptyState from '../components/EmptyState'
import meatsData from '../data/meats.json'

interface Cut {
  id: string
  thumbnails: { default: string }
  names: Record<string, string>
}

export default function Home() {
  const [fromCountry, setFromCountry] = useState('')
  const [toCountry, setToCountry] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  // Cargar preferencias del localStorage
  useEffect(() => {
    const savedFrom = localStorage.getItem('fromCountry')
    const savedTo = localStorage.getItem('toCountry')
    
    if (savedFrom) setFromCountry(savedFrom)
    if (savedTo) setToCountry(savedTo)
  }, [])

  // Guardar preferencias en localStorage
  useEffect(() => {
    if (fromCountry) {
      localStorage.setItem('fromCountry', fromCountry)
    }
  }, [fromCountry])

  useEffect(() => {
    if (toCountry) {
      localStorage.setItem('toCountry', toCountry)
    }
  }, [toCountry])

  // Filtrar cortes
  const filteredCuts = useMemo(() => {
    let cuts = meatsData.cuts as Cut[]

    // Filtrar por búsqueda
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      cuts = cuts.filter(cut => {
        // Buscar en nombres de origen y destino
        const originName = cut.names[fromCountry]?.toLowerCase() || ''
        const destName = cut.names[toCountry]?.toLowerCase() || ''
        
        return originName.includes(searchLower) || 
               destName.includes(searchLower) ||
               Object.values(cut.names).some(name => 
                 name.toLowerCase().includes(searchLower)
               )
      })
    }

    // Ordenar alfabéticamente por nombre de origen
    if (fromCountry) {
      cuts.sort((a, b) => {
        const nameA = a.names[fromCountry] || '—'
        const nameB = b.names[fromCountry] || '—'
        return nameA.localeCompare(nameB, 'es')
      })
    }

    return cuts
  }, [searchTerm, fromCountry, toCountry])

  const showResults = fromCountry && toCountry
  const hasResults = filteredCuts.length > 0

  return (
    <main className="min-h-screen bg-gray-50">
      <TopBar
        countries={meatsData.countries}
        fromCountry={fromCountry}
        toCountry={toCountry}
        searchTerm={searchTerm}
        onFromCountryChange={setFromCountry}
        onToCountryChange={setToCountry}
        onSearchChange={setSearchTerm}
      />
      
      <div className="max-w-7xl mx-auto">
        {!showResults ? (
          <EmptyState
            message="Selecciona países"
            description="Elige un país de origen y uno de destino para ver las traducciones de cortes de carne"
          />
        ) : !hasResults ? (
          <EmptyState
            message="No se encontraron resultados"
            description={searchTerm ? 
              `No hay cortes que coincidan con "${searchTerm}"` : 
              "No hay traducciones disponibles para esta combinación de países"
            }
          />
        ) : (
          <CutsGrid
            cuts={filteredCuts}
            fromCountry={fromCountry}
            toCountry={toCountry}
          />
        )}
      </div>
    </main>
  )
}