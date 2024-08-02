/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      perspective: {
        '1000': '1000px',
      },
      backgroundImage:{
        'cupon-image':"url('img/breakfast.png')"
      },
      keyframes:{
        flip:{
          '0%, 100%' : { transform: 'rotateY(0deg)'},
          '50%' : { transform: 'rotateY(180deg)'},
        }
      },
      animation: {
        flip: 'flip 8s infinite linear',
      }
    },
  },
  plugins: [],
}

