/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          colors: {
              'dark-primary': '#1a1a2e',
              'dark-secondary': '#272740',
              'accent-primary': '#f783ac',
              'accent-secondary': '#a56cc1',
              'text-primary': '#e2e8f0',
              'text-secondary': '#94a3b8',
              'gradient-start': '#1e1e3b',
              'gradient-end': '#272740',

          },
          fontFamily: {
              'main': ['"Montserrat"', 'sans-serif'],
              'secondary': ['"Roboto"', 'sans-serif'],
          },
          boxShadow: {
              'custom': '0 4px 10px rgba(0, 0, 0, 0.3)',
          },
          transitionProperty: {
              'custom': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          },
          backgroundImage: {
              'gradient-bg': 'linear-gradient(to bottom, var(--tw-gradient-start), var(--tw-gradient-end))',
          }
      },
  },
  plugins: [],
}