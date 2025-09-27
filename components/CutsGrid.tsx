'use client'

import CutCard from './CutCard'

interface Cut {
  id: string
  thumbnails: { default: string }
  names: Record<string, string>
}

interface CutsGridProps {
  cuts: Cut[]
  fromCountry: string
  toCountry: string
}

export default function CutsGrid({ cuts, fromCountry, toCountry }: CutsGridProps) {
  if (cuts.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {cuts.map((cut) => {
        const originName = cut.names[fromCountry] || '—'
        const destName = cut.names[toCountry] || '—'
        
        return (
          <CutCard
            key={cut.id}
            thumbnailSrc={cut.thumbnails.default}
            originName={originName}
            destName={destName}
            originCode={fromCountry}
            destCode={toCountry}
          />
        )
      })}
    </div>
  )
}