/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      colors: {
        primary: "#BDEC4D",
        secondary: {
          100: "#1E1F25",
          900: "#131517",
        },
      },
    },
  },
  plugins: [],
}