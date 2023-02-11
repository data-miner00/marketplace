/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "public/**/*.html",
    "src/**/*.{js,jsx,ts,tsx,vue,svelte}",
    "../../packages/**/*.{js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
