/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // <- important so Tailwind scans your components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
