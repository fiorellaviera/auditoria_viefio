/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crema: '#fcfaf2',
        salvia: '#8fb996',
        salviaOscuro: '#739e7a',
        texto: '#4a5c50',
        borde: '#e8ede4',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
