/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        desktop: 'url("./src/images/pattern-bg-desktop.png")',
        mobile: 'url("./src/images/pattern-bg-mobile.png")',
      },
      fontFamily: {
        primaryFont: "Rubik",
      },
      colors: {
        veryDarkGray: " hsl(0, 0%, 17%)",
        darkGray: "hsl(0, 0%, 59%)",
      },
    },
  },
  plugins: [],
};
