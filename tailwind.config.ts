import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        "mplus-rounded": ['"M PLUS Rounded 1c"', "sans-serif"],
        poppins: ["Poppins", "Quicksand", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-yellow": "#FFEB3B",
        "custom-blue": "#1976D2",
        "light-blue": "#63A4FF",
        "custom-green": "#43A047",
        "light-green": "#66BB6A",
        "custom-orange": "#FF9800",
        "customBeige": '#F5F5DC', // 白っぽいベージュ色
        "customOrange": '#FF8C00', // 濃いオレンジ色
      },
      boxShadow: {
        "custom-lg": "0 10px 20px rgba(0, 0, 0, 0.2)",
        "custom-blue": "0 4px 6px rgba(25, 118, 210, 0.3)",
        "custom-green": "0 4px 6px rgba(67, 160, 71, 0.3)",
      },
      borderRadius: {
        xl: "1rem",
      },
      lineHeight: {
        'tight': '1.2rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
