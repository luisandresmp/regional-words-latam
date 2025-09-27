import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'base': '1.125rem', // 18px base para móvil
        'lg': '1.25rem',    // 20px
        'xl': '1.375rem',   // 22px
        '2xl': '1.75rem',   // 28px
      },
      minHeight: {
        'touch': '44px',
      },
      colors: {
        'high-contrast': {
          bg: '#000000',
          text: '#ffffff',
          border: '#ffffff',
        }
      }
    },
  },
  plugins: [],
}
export default config