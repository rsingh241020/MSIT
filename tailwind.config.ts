import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#040814",
        foreground: "#f6fbff",
        card: "#0a1224",
        border: "rgba(130, 181, 255, 0.18)",
        primary: "#61dafb",
        secondary: "#7dd3fc",
        accent: "#2563eb",
        muted: "#9fb4ce",
      },
      fontFamily: {
        heading: ['"Sora"', '"Avenir Next"', '"Segoe UI"', "sans-serif"],
        body: ['"Plus Jakarta Sans"', '"Inter"', '"Segoe UI"', "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(59, 130, 246, 0.25)",
        card: "0 20px 60px rgba(3, 10, 29, 0.45)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      animation: {
        float: "float 12s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
        pulseGlow: "pulseGlow 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.45", transform: "scale(0.96)" },
          "50%": { opacity: "0.9", transform: "scale(1.04)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
