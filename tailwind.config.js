/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        showHide: {
          '0%': {height:"100%"},
          '40%': {height:"0%"},
          '60%': {height:"0%"},
          '100%': {height:"100%"},
      }
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out infinite',
        showHide: 'showHide 5s ease-in alternate infinite',
      },
      fontFamily: {
        quicksand: ["Quicksand"],
      },
    },
  },
  plugins: [],
}
