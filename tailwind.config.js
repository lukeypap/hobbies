/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out infinite',
      },
      fontFamily: {
        quicksand: ["Quicksand"],
      },
    },
  },
  plugins: [],
}
