/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({

  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-grid': 'repeat(auto-fit, minmax(300px, 1fr))'
      }

    },


    // colors: {
    //   'primary': '#C5705D'
    // },


    screens: {
      '2sxl': { 'max': '1536px' },
      'sxl': { 'max': '1280px' },
      'slg': { 'max': '1024px' },
      'smd': { 'max': '768px' },
      'ssm': { 'max': '640px' },
    }
  },
  plugins: [],
});
