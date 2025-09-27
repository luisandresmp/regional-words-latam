import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Traducciones LATAM - Cortes de Carne',
  description: 'Traduce nombres de cortes de carne entre países de Latinoamérica',
  keywords: 'cortes carne, traducción, latinoamérica, argentina, venezuela, chile, colombia',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900 safe-area">
        {children}
      </body>
    </html>
  )
}