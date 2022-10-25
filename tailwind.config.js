/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "dark": "#000000",
      "light": "#F0F7EE",
      "primary": "#5D737E",
      "secondary": "#254133",
      "tertiary": "#9A031E",
    },
  },
  plugins: [],
}
