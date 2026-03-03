/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '3s-green': '#0c2217',
        '3s-green-light': '#123826',
        '3s-yellow': '#fde047', // Adjust to match the button yellow
        '3s-yellow-hover': '#eab308',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
