module.exports = {
  mode: "jit",
  purge: ["src/**/*.{tsx,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        tropicalBlue: "#D0D6F9",
      },
      rotate: {
        40: "40deg",
        "-40": "-40deg",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
