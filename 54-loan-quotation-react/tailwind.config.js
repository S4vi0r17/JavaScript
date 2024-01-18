/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pinkLavender: "#f6e3ec",
        lightPink: "#ffd9de",
        mauve: "#a46b88"
      },
    },
  },
  plugins: [],
}
