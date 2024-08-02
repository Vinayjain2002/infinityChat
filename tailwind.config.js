/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryLightColor : 'rgb(219,234,254)',
        whiteColor: 'rgb(255,255,255)',
        buttonBlueColor: 'rgb(37,99,235)',
        primaryDarkColor: 'rgb(16,23,42)'
      }
    },
  },
  plugins: [],
}