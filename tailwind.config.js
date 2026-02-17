/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#232323",
        secondary: "#FF7800",
        tertiary: "#1cacac",
      },
    },
  },
  plugins: [],
};
