/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D11800',
          50: '#FEE5E3',
          100: '#FDCBC7',
          200: '#FB9790',
          300: '#F96358',
          400: '#F72F21',
          500: '#D11800',
          600: '#A71300',
          700: '#7D0E00',
          800: '#530900',
          900: '#290500',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
