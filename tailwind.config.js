/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./app.js",
    "./components/**/*.js",
    "./containers/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fff',
        secondary: '#000'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
