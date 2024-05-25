/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        myred: "#f0535a",
        myblue: "#02273b",
      },
      boxShadow: {
        shadowred: "2px 3px 5px 0px rgba(240, 83, 90, 0.75)",
      },
    },
  },
  plugins: [],
};
