/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      serif: ['Anton', ...defaultTheme.fontFamily.serif],
    },
    colors: {
      "green-light": "#EAFB97",
      "green-dark": "#C7E66E",
      "purple-light": "#854EE8",
      "purple-dark": "#2B184F",

      "black": "#010400",
      "white": "#ffffff",
      "blue": "#35a7ff",
      "lapis": "#38618c",
      "crayola": "#ff5964",
      "maize": "#ffe74c",
    },
    extend: {},
  },
  plugins: [],
}
