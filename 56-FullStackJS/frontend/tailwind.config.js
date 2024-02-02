/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brown": {
          "50": '#faf6f4',
          "100": '#f3e8e0',
          "200": '#e0c8aa',
          "300": '#cca981',
          "400": '#ae895e',
          "500": '#977e6a', // Color principal
          "600": '#846e5f',
          "700": '#725e53',
          "800": '#5f4e48',
          "900": '#4d3e3d',
        },
        "brown-dark": "#635346",
        "brown-light": "#e8e1d9"
      },
    },
  },
  plugins: [],
}

