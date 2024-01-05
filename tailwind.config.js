const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      blue: {
        DEFAULT: "#8393aa",
        50: "#98a1ae",
      },
      white: "#F2F3F5",
      green: "#9cb4b5",
      beige: "#f9f3e5",
      pink: {
        DEFAULT: "#ff94a3",
        50: "#dbaa9a",
      },
      black: "#231f19",
      purple: "#baa7a7",
      grey: "#726c65",
      
    },
    fontFamily: {
      mono: ["Consolas"],
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    }
  },
  plugins: [],
}
