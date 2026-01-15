/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#020804', // Deepest Organic Dark
          primary: '#05100a', // Dark Jungle
          secondary: '#0f2216', // Deep Moss
          accent: '#ccff00', // Electric Bio-Lime
          text: '#f0fdf4', // Mint White
          muted: '#94a3b8', // Muted Slate
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
