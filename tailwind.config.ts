import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0A",
          surface: "#111111",
          border: "#1E1E1E",
        },
        paper: "#FFFFFF",
        // Color principal — rojo bordo
        brand: {
          DEFAULT: "#7A1C2E",
          hover: "#9B2338",
          muted: "#7A1C2E33",
        },
        // Acento secundario — amarillo oscuro (botones, separadores, labels)
        accent: {
          DEFAULT: "#C4900A",
          hover: "#D9A40C",
          muted: "#C4900A20",
        },
        muted: "#8A8A8A",
      },
      fontFamily: {
        display: ["var(--font-barlow)", "sans-serif"],   // Barlow Condensed — impacto en heroes
        sans: ["var(--font-space)", "system-ui", "sans-serif"], // Space Grotesk — todo lo demás
      },
      letterSpacing: {
        label: "0.18em",
        tight: "-0.03em",
        hero: "-0.04em",
      },
      maxWidth: {
        content: "1280px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
