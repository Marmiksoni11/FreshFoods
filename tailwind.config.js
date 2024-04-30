/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 1px 5px 5px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      },
      // backgroundImage: {
      //   'contactBG': "url('./dist/images/green-figs-with-red-seeds-white-ceramic-bowl-bottom-corner.jpg')",
      // }
    },
  },
  plugins: [],
}

