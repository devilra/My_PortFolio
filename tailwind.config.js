/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  //      animation: {
  //   'gradient-spin': 'gradientSpin 2s linear infinite',
  // },
  //   keyframes: {
  //   gradientSpin: {
  //     '0%': { backgroundPosition: '0% 50%' },
  //     '50%': { backgroundPosition: '100% 50%' },
  //     '100%': { backgroundPosition: '0% 50%' },
  //   },
  // }
   animation: {
    'gradient-spin': 'gradientSpin 6s linear infinite',
  },
  keyframes: {
    gradientSpin: {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
  },
    },
  },
  plugins: [],
}

