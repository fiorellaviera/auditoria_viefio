/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fondo: '#f0f9ff', /* Azul cielo muy clarito para el fondo de la página */
        principal: '#0ea5e9', /* Azul brillante vibrante */
        principalOscuro: '#0284c7', /* Azul más fuerte para dar profundidad */
        amarilloKids: '#f59e0b', /* Amarillo divertido tipo sol */
        rojoKids: '#ef4444', /* Rojo alerta para las vulnerabilidades */
        moradoKids: '#a855f7', /* Morado mágico */
        texto: '#334155', /* Gris oscuro para que la lectura sea cómoda */
        borde: '#cbd5e1', /* Gris clarito para los bordes */
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}