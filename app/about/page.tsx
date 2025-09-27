export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Acerca de Traducciones LATAM
          </h1>
          
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              Esta aplicación te ayuda a traducir nombres de cortes de carne entre diferentes países de Latinoamérica.
            </p>
            
            <p>
              Cada país tiene sus propias tradiciones culinarias y nombres específicos para los cortes de carne. 
              Lo que en Argentina se conoce como "peceto", en Venezuela se llama "muchacho redondo" y en Chile "pollo ganso".
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-6">
              Países incluidos
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>🇦🇷 Argentina</li>
              <li>🇻🇪 Venezuela</li>
              <li>🇺🇾 Uruguay</li>
              <li>🇨🇱 Chile</li>
              <li>🇲🇽 México</li>
              <li>🇨🇴 Colombia</li>
              <li>🇵🇪 Perú</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-6">
              Características de accesibilidad
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Diseño mobile-first optimizado para personas mayores</li>
              <li>Controles de tamaño de fuente (A-, A, A+, A++)</li>
              <li>Modo de alto contraste</li>
              <li>Navegación por teclado</li>
              <li>Compatible con lectores de pantalla</li>
              <li>Botones y controles de tamaño táctil adecuado</li>
            </ul>
            
            <div className="text-center pt-6">
              <a 
                href="/"
                className="inline-block px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"
              >
                Volver al inicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}