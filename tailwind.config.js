/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Sets Poppins as the default sans-serif font
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
