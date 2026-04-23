export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-ivory': '#fcfaf6',
        'brand-yellow': '#ffe8a1',
        'mistral-orange': '#ea580c',
        'mistral-black': '#1a1a1a',
        'brand-cream': '#f4f0e6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],        
        heading: ['Poppins', 'sans-serif'],   
        portal: ['Montserrat', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}
