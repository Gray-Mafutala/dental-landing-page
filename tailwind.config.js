/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-3-vectors": "url('./src/assets/images/HomePage/3-vectors.svg')",
      },
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      violet: "#583fbc",
      "violet-dark": "#181945",
      "violet-hover": "#a78bfa",
      primary: "#9fa0b2",
      "sky-light": "#dbeffa",
      "violet-light": "#dbdefa",
      "fuchsia-light": "#f6dbfa",
      "orange-light": "#fadbe2",
    },

    fontFamily: {
      "bricolage-grotesque": ["Bricolage Grotesque", "sans-serif"],
      "open-sans": ["Open Sans", "sans-serif"],
    },

    screens: {
      mobile: "320px",
      mobileM: "475px",
      mobileL: "580px",
      mobileXL: "640px",
      tablet: "768px",
      laptop: "1024px",
      laptopM: "1280px",
    },
  },

  plugins: [],
};
