/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { customBlue: "#0c112d", customGold: "#b89f84" },
      keyframes: {
        flicker: {
          "0%, 100%": { boxShadow: "4px 0px 3px #166534" },
          "30%": { boxShadow: "10px 2px 80px #166518" },
          "50%": { boxShadow: "20px 0px 60px #166528" },
          "70%": { boxShadow: "0px 4px 20px #166400" },
        },
      },
      animation: { flicker: "flicker 6s infinite alternate" },
    },
  },
  plugins: [],
};
