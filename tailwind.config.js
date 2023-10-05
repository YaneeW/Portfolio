/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./portfolio/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lora: ["Lora", serif],
        Right: ["Righteous", cursive],
      },
    },
  },
  plugins: [],
};
