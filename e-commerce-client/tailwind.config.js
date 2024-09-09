/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./global/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        big2_5: "2.5em",
        biggest1_5: "1.5em",
        biggest1_25: "1.25em",
        biggest1: "1em",
        normal: ".938em",
        small: ".813em",
        smallest: ".75em"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'Roboto', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
    },
    experimental: {
      applyComplexClasses: true,
    },
    screens: {
      gs: "240px",
      xs: "480px",
      ss: "640px",
      sm: "768px",
      md: "1024px",
      lg: "1280px",
    },
  },
  plugins: [],
}




