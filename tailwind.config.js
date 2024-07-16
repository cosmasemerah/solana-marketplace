/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        work: ["Work Sans", " Helvetica"],
        space: ["Space Mono", "monospace"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: 1.4 }], //12px
        base: ["1rem", { lineHeight: 1.4 }], //16px
        "2xl": ["1.375rem", { lineHeight: 1.4 }], //22px
        "3xl": ["1.75rem", { lineHeight: 1.4 }], //28px
        "4xl": ["2.375rem", { lineHeight: 1.4 }], //38px
        "5xl": ["3.1875rem", { lineHeight: 1.1 }], //51px
        "6xl": ["4.1875rem", { lineHeight: 1.4 }], //67px
      },
      colors: {
        primary: "#2B2B2B",
        secondary: "#3B3B3B",
        cta: "#A259FF",
        mute: "#CCCCCC",
        caption: "#858584",
        green: "#00AC4F",
      },
      padding: {
        6: "1.375rem", //22px
        7: "1.875rem", //30px
        12: "3.125rem", //50px
        14: "3.75rem", //60px
        18: "4.5", //72px
      },
      height: {
        7: "1.875rem", //30px
        12: "3.125rem", //50px
        14: "3.75rem", //60px
        24: "6.25rem", //100px
        32: "8.875rem", //142px
        52: "12.875rem", //206px
        54: "13.0625rem", //209px
        56: "13.8125rem", //221px
        60: "14.875rem", //238px
        64: "15.625rem", // 250px
      },
      width: {
        7: "30px",
        12: "3.125rem", //50px
        14: "3.75rem", //60px
        24: "6.25rem", //100px
        52: "12.875rem", //206px
        56: "13.8125rem", //221px
        xs: "19.6875rem",
        "2xl": "43.125rem",
        "5xl": "65.625rem",
      },
      minWidth: {
        xs: "19.6875rem", // 315px
        sm: "23.4375rem", // 375px
        "2xl": "43.125rem", // 690px
        md: "52.125rem", // 834px
        "5xl": "65.625rem", // 1050px
        lg: "80rem", //1280px
      },
      maxWidth: {
        xs: "19.6875rem", // 315px
        sm: "23.4375rem", // 375px
        "2xl": "43.125rem", // 690px
        md: "52.125rem", // 834px
        "5xl": "65.625rem", // 1050px
        lg: "80rem", //1280px
      },
      backgroundImage: {
        art: "url('/src/assets/cat01.webp')",
        collectibles: "url('/src/assets/cat02.webp')",
        music: "url('/src/assets/cat03.webp')",
        photography: "url('/src/assets/cat04.webp')",
        video: "url('/src/assets/cat05.webp')",
        utility: "url('/src/assets/cat06.webp')",
        sport: "url('/src/assets/cat07.webp')",
        vrworld: "url('/src/assets/cat08.webp')",
      },
      screens: {
        sm: "23.4375rem",
        md: "52.125rem",
        lg: "80rem",
      },
      spacing: {
        7: "1.875rem", //30px
        14: "3.75rem", //60px
      },
      borderRadius: {
        "3xl": "1.25rem",
      },
      transitionDuration: {
        2000: "2000ms",
      },
    },
  },
  plugins: [],
};
