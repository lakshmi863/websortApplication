// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        fustat: ['Fustat', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        mplus: ['"Mplus 1p"', 'sans-serif'],
         mukta: ['Mukta', 'sans-serif'],
      },
      screens: {
        iphone56: { raw: "(device-width: 430px) and (device-height: 926px)" },
        iphone57: { raw: "(device-width: 430px) and (device-height: 932px)" },
        iphone58: { raw: "(device-width: 430px) and (device-height: 844px)" },
        iphone61: { raw: "(device-width: 430px) and (device-height: 932px)" },
        iphone62: { raw: "(device-width: 430px) and (device-height: 926px)" },
        desktop16: "1024px",
        desktop17: "1100px",
        desktop18: "1152px",
        desktop19: "1216px",
        desktop20: "1280px",
        desktop21: "1366px",
        desktop22: "1440px",
        desktop23: "1536px",
        desktop24: "1600px",
        desktop25: "1680px",
        desktop26: "1731px",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide') 
  ],
};
