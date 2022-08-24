
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1536px',
    },

    extend: {
      colors: {
        zippia_text: '#333333cc',
        zippia_black: '#2c2c2c',
        zippia_blue: '#3174ee',
        zippia_orange: '#ff6000',
        zippia_error: '#f44335',
        },
    },
  },
  plugins: [],
}
