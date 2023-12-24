/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mplus: ["'M PLUS Rounded 1c'", 'Verdana', 'sans-serif'],
        'lato': ['"lato"', 'sans-serif'],
        'EduTASBeginner': ['"Edu TAS Beginner"', 'cursive']
      },
      colors: {
        "primary-light": "#0F0F0F",
        "secondary": {
          100: "#E2E2D5",
          200: "#888883",
        },
        "blines": "#cfcfcf",
        "linkedin": "#0077b5",
        "github-white": "f5f5f5",
        "email": "#9e9e9e",
        "blog": "#00b341",
        "letter": "#f2efe6",
        "pearl": "#fcfcf7",
        "village": "F0ECe3",
        "ceramic": "fefffa",
        "hazelnut": "f3ebdf",
        "passific": "e9eae4"             
      },  
      keyframes: {
        wave: {
          to: {
            'margin-left': '-51%',
          },
        },
      },
      animation: {
        wave: 'wave 1.5s ease-in-out infinite',
      },  
    },
  },
  plugins: [],
}

