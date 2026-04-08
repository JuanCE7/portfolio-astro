/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#C41E3A",
          dark: "#E8324D",
        },
        ink: {
          900: "#111111",
          700: "#444444",
          400: "#888888",
        },
        surface: {
          100: "#FFFFFF",
          200: "#F7F7F7",
          300: "#E5E5E5",
        },
      },
      fontFamily: {
        figtree: ["Figtree Variable", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
