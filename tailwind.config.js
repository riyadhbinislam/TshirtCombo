/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./**/*.{html,js,ts,jsx,tsx}"],
  content: ["./**/*.html", "./**/*.php", "./**/*.js" ],
  theme: {
    fontFamily: {
      baloo: ["Baloo Da 2", "sans-serif"],
      Lato: ["Lato", "sans-serif"],
      Libre: ["Libre Baskerville", 'serif'],
      Caveat: ["Caveat Brush", 'cursive'],

    },
    screens: {

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',


    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.25rem",
        mobile: "2rem",
        tab: "2rem",
        desktop: "2.5rem",
      },
    },

    // **********  Extend  *************

    extend: {
      colors: {
        primary: '#3066B7',
        bgLight: '#EAF0F8',
        bgDark: '#142B4D',
        dark:  '#3A3A3A',
        bodyText: '#333333',
        subText: '#E2136E'

      },
      backgroundImage: {
        'quality-one': "url('/Assets/image/T-shirt Quality-1.png')",
        'quality-two': "url('/Assets/image/T-shirt Quality-2.png')",
        'quality-three': "url('/Assets/image/T-shirt Quality-3.png')",
      }
    },
  },

  // **********  Plugins  *************

  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.custom-checklist': {
          listStyleType: 'none',
          // paddingLeft: theme('spacing.10'), // Space for the icon
        },
        '.custom-checklist li::before': {
          content: '""', // No text, just the icon
          display: 'inline-block',
          width: '1rem',
          height: '1rem',
          marginRight: theme('spacing.2'),
          backgroundImage: 'url(/Assets/icon/list-style-icon.svg)', // Reference your icon here
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        },
        '.swiper-wrapper ':{
          width: '100%',
          height: 'max-content !important',
          paddingBottom: '64px !important',
          // -webkit-transition-timing-function: 'linear !important',
          // transition-timing-function: 'linear !important',
          position: 'relative',
          },
          '.swiper-pagination-bullet': {
          background: '#4f46e5',
          }
      });
    },
  ],
  darkMode: "media", //'media' or 'class'
};