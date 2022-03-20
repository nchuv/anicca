const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,html,pug}"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.yellow,
        main: {
          black: "#0D0D0D",
          grey: "#F5F5F5",
        },
        accent: "#EF2500",
      },
      container: {
        center: true,
        screens: {
          '2xl': '1016px',
        }
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}