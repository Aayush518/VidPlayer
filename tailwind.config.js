/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#09090b',
          'secondary': '#18181b',
          'accent': '#22d3ee',
          'accent-secondary': '#818cf8',
          'surface': '#27272a',
          'surface-secondary': '#3f3f46',
        },
        fontFamily: {
          'main': ['Montserrat', 'sans-serif'],
          'secondary': ['Roboto', 'sans-serif'],
        },
        boxShadow: {
          'custom': '0 8px 32px rgba(0, 0, 0, 0.3)',
          'glow': '0 0 20px rgba(34, 211, 238, 0.2)',
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'glow': 'glow 3s ease-in-out infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          glow: {
            '0%, 100%': { boxShadow: '0 0 20px rgba(34, 211, 238, 0.2)' },
            '50%': { boxShadow: '0 0 40px rgba(34, 211, 238, 0.3)' },
          },
        },
      },
    },
    plugins: [
      require('tailwindcss-animate'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }