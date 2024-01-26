/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // fontSize: {
    //   sm: "12.35px",
    //   base: "13px",
    //   md: "13.975px",
    //   xl: "16.575px",
    //   "2xl": "17.8058px",
    //   "3xl": "2.441rem",
    //   "4xl": "3.052rem",
    // },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
    extend: {
      fontSize: {
        normal: "17.5px",
        medium: "22.5px",
      },
      colors: {
        "light-gray": "rgb(107, 114, 128)",
      },
    },
  },
  plugins: [],
};
