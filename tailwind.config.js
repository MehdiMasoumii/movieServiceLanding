const { Opacity } = require('@mui/icons-material');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%' : {transform: 'translateY(-50px)' , opacity : 0 },
          '100%' : {transform : 'translateY(0px)' , opacity : 1},
        },
        wiggleLeft: {
          '0%' : {transform: 'translateX(50px)' , opacity : 0 },
          '100%' : {transform : 'translateX(0px)' , opacity : 1},
        },
        wiggleRight: {
          '0%' : {transform: 'translateX(-50px)' , opacity : 0 },
          '100%' : {transform : 'translateX(0px)' , opacity : 1},
        },
        wiggleInfDown: {
          '0%' : {transform: 'translateY(0px)' , opacity : 1 },
          '50%' : {transform: 'translateY(-50px)' , opacity : .95 },
          '100%' : {transform : 'translateY(0px)' , opacity : 1},
        },
        wiggleInfUp: {
          '0%' : {transform: 'translateY(0px)' , opacity : 1 },
          '50%' : {transform: 'translateY(50px)' , opacity : .95 },
          '100%' : {transform : 'translateY(0px)' , opacity : 1},
        },
        jumpoutTop: {
          '0%' : {transform: 'translateY(0px)' , opacity : 1 },
          '10%': { transform: 'translateY(10px)' , opacity : 1 },
          '100%' : {transform : 'translateY(-500px)' , opacity : 1}
        },
        jumpoutBottom: {
          '0%' : {transform: 'translateY(-500px)' , opacity : 1 },
          '80%': { transform: 'translateY(10px)' , opacity : 1 },
          '100%' : {transform : 'translateY(0px)' , opacity : 1}
        },
        
      }
    },
  },
  plugins: [],
}