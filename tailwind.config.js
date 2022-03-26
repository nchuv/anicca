// const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,html,pug}"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0D0D0D",
        secondary: "#F5F5F5",
        accent: "#EF2500",
      },
      c: {
        center: true,
        screens: {
          DEFAULT: '100%',
          '2xl': '1080px',
        }
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}