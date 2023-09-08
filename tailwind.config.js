/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow_condensed: ["var(--font-barlow_condensed)"],
        bellefair: ["var(--font-bellefair)"],
        barlow: ["var(--font-barlow)"],
        
      },
      colors:{
        grayice_blue:'#D0D6F9',
        mybackground:'rgba(255, 255, 255, 0.04)'
      }
    },
  },
  plugins: [],
};
