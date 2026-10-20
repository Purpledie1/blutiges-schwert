/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#050506',
          900: '#09090b',
          850: '#0e0e11',
          800: '#151518',
          700: '#222226',
        },
        blood: {
          900: '#450a0a',
          800: '#7f1d1d',
          700: '#991b1b',
          600: '#b91c1c',
          500: '#dc2626',
        },
        steel: {
          100: '#f1f5f9',
          200: '#e2e8f0',
          400: '#94a3b8',
          500: '#64748b',
          700: '#334155',
        }
      },
      fontFamily: {
        gothic: ['UnifrakturMaguntia', 'Cinzel Decorative', 'serif'],
        cinzel: ['Cinzel Decorative', 'serif'],
        mono: ['"Space Mono"', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.25em',
        ultra: '.4em',
      }
    },
  },
  plugins: [],
}
