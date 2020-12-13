module.exports = {
  future: {
  removeDeprecatedGapUtilities: true,
  purgeLayersByDefault: true,
},
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#8dc63f',
          dark: '#7EB038',
        },
      },
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      fontFamily: ['hover', 'focus'],
    },
    color: ['responsive', 'hover'],
  },
  plugins: [
/*     require('@tailwindcss/forms'), */
  ],
}