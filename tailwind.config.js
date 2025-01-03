/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        highlightCol: 'hsl(0, 100%, 74%)',
        submitCol: 'hsl(154, 59%, 51%)',
        divCol: 'hsl(248, 32%, 49%)',
        textCol1: 'hsl(249, 10%, 26%)',
        textCol2: 'hsl(246, 25%, 77%)',
        shadowCol: 'hsla(249, 10%, 26%, 0.2)',
      },
      fontFamily:{
        poppins: ['Poppins', 'serif'],
      },
      backgroundImage:{
        bgMobile: 'url(/images/bg-intro-mobile.png)', 
        bgDesktop: 'url(/images/bg-intro-desktop.png)',
      },
      boxShadow:{
        divs: '0rem 0.5rem',
        insetDivs: 'inset 0rem -0.3rem 0 rgb(0 0 0 / 0.1)',
      },
      fontSize:{
        '2xs': '0.7rem',
      },
    },
  },
  plugins: [],
}

