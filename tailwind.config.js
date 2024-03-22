/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0b3b23",
          "secondary": "#eeeeee",
          "accent": "#CEDEBD",
          "neutral": "#f3f4f6",
          "base-100": "#ffffff",
          "info": "#0000ff",
          "success": "#19392e",
          "warning": "#FD8D14",
          "error": "#ff0000",
        },
      },
    ],
  },
  theme: {
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin')
  ],
}