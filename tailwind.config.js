/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./portfolio/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        abel: ["Abel", sans - serif],
        noto: ["Noto Serif Display", serif],
      },
    },
  },
  plugins: [],
};
