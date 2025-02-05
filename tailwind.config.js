/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js,ejs}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "main": {
          50: "#E8E8E8",
          100: "#DBDBDB",
          200: "#C4C4C4",
          300: "#ABABAB",
          400: "#949494",
          500: "#7D7D7D",
          600: "#636363",
          700: "#4D4D4D",
          800: "#363636",
          900: "#1C1C1C",
          950: "#111111"
        },
        "accent": {
          50: "#FDF7E7",
          100: "#FBF1D5",
          200: "#F8E2A6",
          300: "#F4D47B",
          400: "#F1C651",
          500: "#EDB925",
          600: "#CB9911",
          700: "#97720C",
          800: "#634B08",
          900: "#342704",
          950: "#181202"
        }
      }
    }
  },
  plugins: [],
}

