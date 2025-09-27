'use client'

import Image from 'next/image'
import ReactCountryFlag from 'react-country-flag'

interface CutCardProps {
  thumbnailSrc: string
  originName: string
  destName: string
  originCode: string
  destCode: string
}

export default function CutCard({ 
  thumbnailSrc, 
  originName, 
  destName, 
  originCode, 
  destCode
}: CutCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow">
      {/* Layout móvil: imagen arriba */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative w-full h-32 sm:w-24 sm:h-24 flex-shrink-0">
          {thumbnailSrc ? (
            <Image
              src={thumbnailSrc}
              alt={`Corte de carne: ${originName}`}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 640px) 100vw, 96px"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm">
              Sin foto
            </div>
          )}
        </div>
        
        <div className="flex-1 space-y-3">
          {/* Nombres en dos columnas en móvil */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-600 font-medium mb-1 flex items-center gap-2">
                <ReactCountryFlag
                  countryCode={originCode}
                  svg
                  style={{ width: '1em', height: '1em' }}
                />
                Origen ({originCode})
              </div>
              <div className="text-lg font-semibold text-gray-900">
                {originName}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600 font-medium mb-1 flex items-center gap-2">
                <ReactCountryFlag
                  countryCode={destCode}
                  svg
                  style={{ width: '1em', height: '1em' }}
                />
                Destino ({destCode})
              </div>
              <div className="text-lg font-semibold text-gray-900">
                {destName}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}