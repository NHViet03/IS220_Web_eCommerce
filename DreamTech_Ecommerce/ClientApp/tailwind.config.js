/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/account/*.{js,jsx,ts,tsx}",
    "./src/pages/cart.js",
    "./src/components/MyAccount/Sidebar.js",
    "./src/components/Footer.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

