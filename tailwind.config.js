/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1140",
        "2xl": "1140px",
      },
      colors: {
        primary: "#ffbe33",
        secondary: "#222831",
        danger: "#f44336",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
