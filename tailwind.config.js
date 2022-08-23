const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins, sant-serif"],
    },
    colors: {
      grisClaro: "#f1f1f1",
      taLightMain: "#a9126b",
      blue:colors.blue,
      red:colors.red,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    extend: {},
  },
  plugins: [],
};