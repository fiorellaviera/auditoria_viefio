/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fondo: '#f0f9ff',
        principal: '#0ea5e9',
        principalOscuro: '#0284c7',
        amarilloKids: '#f59e0b',
        rojoKids: '#ef4444',
        moradoKids: '#a855f7',
        texto: '#334155',
        borde: '#cbd5e1',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      // ¡Aquí agregamos la magia del movimiento!
      keyframes: {
        flotar: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }, // Sube 10 pixeles a la mitad
        },
        pintar: {
          '0%, 100%': { transform: 'rotate(-12deg)' },
          '50%': { transform: 'rotate(12deg)' }, // Gira como un limpiaparabrisas
        }
      },
      animation: {
        'flotar': 'flotar 2s ease-in-out infinite', // Dura 2 segundos y se repite siempre
        'pintar': 'pintar 1.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}