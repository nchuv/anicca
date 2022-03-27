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
      container: {
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
      },
      fontSize: {
        '3xl': ['32px', {
          lineHeight: '40px',
        }],
        '5xl': ['50px', {
          lineHeight: '50px',
        }],
      },
      minWidth: {
        '8': '2rem',
      },
      margin: {
        '18': '4.5rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}