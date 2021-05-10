module.exports = {
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#ce2d4f',
          '50': '#fae7eb',
          '100': '#f5d2d9',
          '200': '#eca8b6',
          '300': '#e37e93',
          '400': '#da5470',
          '500': '#ce2d4f',
          '600': '#a4243f',
          '700': '#7a1b2f',
          '800': '#50121f',
          '900': '#27080f'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
