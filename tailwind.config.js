/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        whiteLigth: '#f5f5f5',
        whiteLightSecondary: '#bdbcbc',
        whitePrimary: '#C7C7C7',
        blueDark: 'rgb(6, 2, 28)',
        dodgerblue: 'dodgerblue',
        gray:'#dadada',
        darkBlue:'#293548',
        pinkPrimary:'#F472B6',
      },
      boxShadow:{
        shadowPrimary: '0 1px 2px 0 rgba(60, 64, 67, .3), 0 2px 6px 2px rgba(60, 64, 67, .15)',
      },
      fontFamily:{
        Montserrat:['Montserrat', 'sans-serif'],
      },
      height:{
        customHeightPrimary:'calc(100vh - 500px)',
      },
    },
  },
  plugins: [],
}