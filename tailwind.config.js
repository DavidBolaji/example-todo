/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        colors: {
            default_red: '#e44232',
            hover_red: '#c3392c'
        }
      },
  },
  plugins: [],
  }