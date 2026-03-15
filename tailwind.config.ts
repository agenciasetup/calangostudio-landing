import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#030303",
          secondary: "#0a0a0c",
          tertiary: "#111114",
        },
        accent: {
          DEFAULT: "#ffaa00",
          hover: "#ffc040",
          end: "#ff7b47",
        },
        txt: {
          primary: "#e5e5e5",
          secondary: "#a1a1aa",
          muted: "#71717a",
        },
        glass: "rgba(255,255,255,0.08)",
        "glass-border": "rgba(255,255,255,0.10)",
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
        inter: ["'Inter'", "sans-serif"],
      },
      borderRadius: {
        "2xl": "18px",
        "3xl": "24px",
        "4xl": "32px",
      },
      boxShadow: {
        glow: "0 10px 40px -10px rgba(255, 170, 0, 0.5)",
        "glow-sm": "0 0 20px rgba(255, 170, 0, 0.15)",
        "glow-lg": "0 0 60px rgba(255, 170, 0, 0.2)",
        "glow-xl": "0 0 80px rgba(255, 170, 0, 0.25)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-lg": "0 20px 60px rgba(0, 0, 0, 0.35)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(255,170,0,0.06)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-24px) rotate(3deg)" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(16px) rotate(-2deg)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "glow-ring": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255,170,0,0.1), inset 0 0 20px rgba(255,170,0,0.05)" },
          "50%": { boxShadow: "0 0 40px rgba(255,170,0,0.2), inset 0 0 30px rgba(255,170,0,0.1)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "float-reverse": "float-reverse 7s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        orbit: "orbit 15s linear infinite",
        wiggle: "wiggle 2s ease-in-out infinite",
        "fade-up": "fade-up 0.5s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        "glow-ring": "glow-ring 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
