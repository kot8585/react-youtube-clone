/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'textPrimary': 'black',
      'textGray': '#6e6e6e',
      'bgPrimary': 'white' 
    }
    },
    
  },
  plugins: [],
}
