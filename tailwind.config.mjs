/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#800000", // Dark red
          800: "#9a0000",
          700: "#b40000",
          600: "#ce0000",
          500: "#e80000",
        },
        gradient: {
          start: "#800000",
          end: "#000080",
        },
      },
      fontFamily: {
        outfit: ["Outfit Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
