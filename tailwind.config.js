/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
 
    extend: {
      screens: {
        'xs': '420px',
        'sm': '600px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      colors:{
        krzyzowka:'#E0ECE9'
      },
      fontFamily: {
        'acumin': ['acumin-pro', 'sans-serif']
        },
        fontSize: {
          sm: ['13px', '20px'],
          xm: ['16px', '20px'],
          base: ['16px', '24px'],
          md:['18px','24px'],
          lg: ['1.5rem', '28.8px'],
          xl: ['24px', '32px'],
          '2xl':['4rem','80px'],
          '3xl':['5rem','100px']
        }
    },
    
  },
  darkMode: 'class',
  plugins: [],
}