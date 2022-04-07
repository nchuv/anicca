// const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,html,pug}"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'image-xs': '4px 4px 0 0 #EF2500',
        'image-md': '11px 11px 0 0 #EF2500',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      colors: {
        primary: "#0D0D0D",
        secondary: "#F5F5F5",
        accent: "#EF2500",
      },
      container: {
        center: true,
        screens: {
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
          lineHeight: '34px',
        }],
        '5xl': ['50px', {
          lineHeight: '50px',
        }],
      },
      minWidth: {
        '8': '2rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '44': '11rem',
        '98': '24.5rem', // 392
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}