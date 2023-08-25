// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'accent-color-02': 'var(--accent-color-02, #C6F0F8)',
      },
      colors: {
        'accent-color-main': 'var(--accent-color-main, #0E606E)',
      },
    },
  },
  variants: {},
  plugins: [],
}

