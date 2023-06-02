/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "lob-blue": '#53CAE4',
        "lob-purple": '#8800C790',
        "lob-orange": '#FC4F2C',
        "test": '#FFFFFF',
        "color-red": '#FF0000'
      }
    },
  },
  plugins: [],
}