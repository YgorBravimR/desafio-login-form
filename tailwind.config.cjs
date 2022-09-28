module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     screens: {
      'sm': '428px',
      // => @media (min-width: 576px) { ... }

      'md': '576px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        textBase: "var(--textBase)",
        textTitle: "var(--textTitle)",
        background: "var(--background)",
          formBackground: "var(--formBackground)",
          primaryColor: "var(--primaryColor)",
          
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },

      backgroundImage: {
        'sideBgImage': 'url(`/side-image.jpg`)'
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}