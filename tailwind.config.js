/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#02040a', // Almost black blue
          primary: '#0B1121', // Dark blue background
          secondary: '#15233E', // Lighter blue for cards
          accent: '#00DC82', // Vibrant sustainable green
          text: '#E2E8F0', // Light text
          muted: '#94A3B8', // Muted text
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
