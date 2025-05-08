/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'green': '#4CAF50',
          'gold': '#FFD700',
          'brown': '#8B4513',
          'beige': {
            50: '#F5F5DC',
            // Add other shades if needed
          },
        },
        fontFamily: {
          'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'], // Example sans-serif font
          // Define other fonts if needed
        },
      },
    },
    plugins: [],
  };