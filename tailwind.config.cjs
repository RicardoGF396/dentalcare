/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors:{
        'light-blue': '#F4F4F8',
        'main-red': '#CF3C34'
      }
    },
  },
  plugins: [
    
  ],
}
