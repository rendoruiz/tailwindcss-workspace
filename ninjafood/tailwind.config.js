module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        gigantic: ['10rem', { lineHeight: '1' }],
      },
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#88888E',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
