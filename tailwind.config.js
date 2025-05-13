/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#1E3A8A',       // bleu nuit
            light: '#2563EB',
          },
          secondary: '#F9FAFB',        // gris clair
          accent: '#3B82F6',
        },
        fontFamily: {
          sans: ['Inter', 'Poppins', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  