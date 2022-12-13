/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
   screens:{
 sm: '480px',
 md: '768px',
 lg:'1024px',
 xl: '1280px',
 },
    extend: { 
        fontFamily:{
rubik: ['Rubik', 'sans-serif']
 },
    },
  },
  plugins: [],
}
