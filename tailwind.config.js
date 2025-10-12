/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.css",
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class', // 'media' for OS preference, 'class' for manual toggle
  plugins: [],
}