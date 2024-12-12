/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./.vitepress/**/*.{js,ts,jsx,tsx,vue}",
    "!./**/*.md"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

