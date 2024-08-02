/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     fontFamily:{
      talisman: ['PPTalisman', 'sans-serif'],
      playground: ['PPPlayground', 'sans-serif']
     },
      backgroundImage:{
        'cupon-image':"url('/img/breakfast.png')"
      },
    },
  },
  plugins: [],
}

