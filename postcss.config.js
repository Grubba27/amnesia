/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./imports/ui/**/*.{js,jsx,ts,tsx}",
    "./src/imports/ui/**/*.{js,jsx,ts,tsx,svelte}",
    "./src/client/ui/**/*.{js,jsx,ts,tsx,svelte}",
    "./client/*.html",
    "./src/**/*.{svelte,js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
}
