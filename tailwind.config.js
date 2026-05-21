/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: "#e6c96a",
          500: "#d4af37",
        },
      },
    },
  },
  plugins: [],
}
