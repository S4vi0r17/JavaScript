/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        pinkLavender: "#f6e3ec",
        lightPink: "#DC9FBD",
        mauve: "#a46b88"
      },
    },
  },
  plugins: [],
}
