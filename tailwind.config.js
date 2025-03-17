/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontSize: {
      "8xl": ["48px", "56px"],
      "7xl": ["42px", "50px"],
      "6xl": ["38px", "46px"],
      "5xl": ["30px", "38px"],
      "4xl": ["24px", "32px"],
      "3xl": ["20px", "28px"],
      "2xl": ["16px", "24px"],
      xl: ["14px", "22px"],
      base: ["12px", "20px"],
      sm: ["10px", "14px"],
      "m-7xl": ["42px", "48px"],
      "m-6xl": ["38px", "42px"],
      "m-5xl": ["30px", "34px"],
      "m-4xl": ["24px", "28px"],
      "m-3xl": ["20px", "24px"],
      "m-2xl": ["16px", "20px"],
      "m-xl": ["14px", "18px"],
      "m-base": ["12px", "16px"],
      "m-sm": ["10px", "14px"],
    },
    extend: {
      colors: {
        orange: {
          300: '#FFBB96'
        },
        primary: {
          default: '#0586FE'
        },
        brand: {
          100: `var(--brand-100)`,
          200: `var(--brand-200)`,
          300: `var(--brand-300)`,
          400: `var(--brand-400)`,
          500: `var(--brand-500)`,
          600: `var(--brand-600)`,
          700: `var(--brand-700)`,
          800: `var(--brand-800)`,
          900: `var(--brand-900)`,
          950: `var(--brand-950)`,
        },
        "regular": 'rgba(0, 0, 0, 0.65)',
        "Primary": 'rgba(0, 0, 0, 0.88)',
        // Neutral
        "black-100": "#FFFFFF",
        "black-200": "#FAFAFA",
        "black-300": "#F5F5F5",
        "black-400": "#F0F0F0",
        "black-500": "#D9D9D9",
        "black-600": "#BFBFBF",
        "black-700": "#8C8C8C",
        "black-800": "#434343",
        "black-900": "#1F1F1F",
        "black-950": "#000000",
        'Pblack-500': "#1F1F1F",
        // Error/Red,
        "red-100": "#FFF1F0",
        "red-200": "#FFCCC7",
        "red-300": "#FFA39E",
        "red-400": "#FF7875",
        "red-500": "#FF4D4F",
        "red-600": "#F5222D",
        "red-700": "#CF1322",
        // warning/yellow
        "yellow-100": "#FFFBE6",
        "yellow-200": "#FFF1B8",
        "yellow-300": "#FFE58F",
        "yellow-400": "#FFD666",
        "yellow-500": "#FFC53D",
        "yellow-600": "#FAAD14",
        "yellow-700": "#D48806",
        // green/success
        "green-100": "#F6FFED",
        "green-200": "#D9F7BE",
        "green-300": "#B7EB8F",
        "green-400": "#95DE64",
        "green-500": "#73D13D",
        "green-600": "#52C41A",
        "green-700": "#389E0D",
        // other/volcano
        "volcano-100": "#FFF2E8",
        "volcano-200": "#FFD8BF",
        "volcano-300": "#FFBB96",
        "volcano-400": "#FF9C6E",
        "volcano-500": "#FF7A45",
        "volcano-600": "#FA541C",
        "volcano-700": "#D4380D",
      },
      boxShadow: {
        md: "0 2px 16px 0px rgba(0,0,0,.1)",
        shop: '0px 0px 0px 3px rgba(0, 0, 0, 0.12)'
      },
      fontSize: {
        h1: ["38px", { lineHeight: "46px", fontWeight: 700 }],
      },
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
      },
      keyframes: {
        "text-fade-out-in": {
          "0%, 100%": { color: "inherit" },
          "50%": { color: "transparent" },
        },
      },
    },
  },
  plugins: [],
};
