module.exports = {
  purge: [
    './src/*.html',
    './src/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          800: '#0d121d',
          900: '#07080d',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}