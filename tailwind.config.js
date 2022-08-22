/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "light-grey": "#f1f1f1",
        "at-light-green": "#a9126b",
      },
    },
    fontFamily:{
      Poppins: ["Poppins, sant-serif"],
    },
  },
  plugins: [],
}
