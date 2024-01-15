/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
    'pop': ['Poppins', 'sans-serif'],
    'rob': ['Roboto', 'sans-serif']
  },
  colors: {
    'page-yellow': '#BD7D41',
    'text': '#243040',
    'page-grey': 'rgba(45,57,73,0.04)',
  },
    },
    container: {
      center: 'true',
      padding: {
        '2xl': '284px'
      },
    },
  },
  plugins: [],
}