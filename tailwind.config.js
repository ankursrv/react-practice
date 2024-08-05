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
        blueDark: 'rgb(6, 2, 28)',
        dodgerblue: 'dodgerblue',
        gray:'#dadada',
        darkBlue:'#293548',
        pinkPrimary:'#F472B6',
      },
      fontFamily:{
        Montserrat:['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}