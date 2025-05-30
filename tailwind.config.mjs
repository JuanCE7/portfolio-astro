/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#9a0000", // Dark red
          800: "#9a0000",
          700: "#d4cabe",
          600: "#53081",
          500: "#fff",
        },
        gradient: {
          start: "#000",
          end: "#530808",
        },
      },
      fontFamily: {
        outfit: ["Outfit Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
