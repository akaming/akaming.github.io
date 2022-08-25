/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    screens: {
      sm: { max: "767px" },
      // => 모바일 (가로 해상도 767px 보다 작은 화면에 적용)

      md: { min: "768px", max: "1023px" },
      // => 태블릿 (가로 해상도가 768px 보다 크고 1023px 보다 작은 화면에 적용)

      lg: { min: "1024px" },
      // => 데스크탑 (가로 해상도가 1024px 보다 큰 화면에 적용)
    },
    extend: {
      fontFamily: {
        sans: ["Noto_r", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins", "sans-serif"],
        noto_m: ["Noto_m", "sans-serif"],
        noto_r: ["Noto_r", "sans-serif"],
      },
    },
  },
  purge: {
    enabled: true,
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/*.{js,ts,jsx,tsx}",
    ],
  },
  plugins: [],
};
