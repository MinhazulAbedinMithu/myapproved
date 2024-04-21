/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'yellow-bg': '#ffbe17',
        'gray-bg': '#f0f0f0',
      },
      colors: {
        'dark-text': '#091E3E',
        'yellow': '#ffbe17',
      },
    },
  },
  plugins:  [],
}