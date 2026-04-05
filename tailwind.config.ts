import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* ── Fonts ─────────────────────────────────────── */
      fontFamily: {
        sans: ['"Cabinet Grotesk"', "sans-serif"],
        display: ['"Mango Grotesque"', "sans-serif"],
      },

      /* ── Font Sizes (with matching line-heights) ──── */
      fontSize: {
        "hero-heading": ["44px", { lineHeight: "110%" }],
        "section-heading": ["28px", { lineHeight: "120%" }],
        body: ["20px", { lineHeight: "120%" }],
        button: ["16px", { lineHeight: "normal" }],
        nav: ["16px", { lineHeight: "normal" }],
        caption: ["14px", { lineHeight: "120%" }],
        logo: ["24px", { lineHeight: "normal" }],
      },

      /* ── Colors ────────────────────────────────────── */
      colors: {
        /* Backgrounds */
        dark: "#1B1B1B",
        sage: {
          DEFAULT: "#9CA79A",
          light: "#AFBBAD",
        },
        "card-orange": "#C8623A",
        "card-dark": "#2E2E2E",

        /* Text */
        "heading-orange": "#FE9161",
        "body-copper": "#CA947C",
        "logo-gray": "#A0A1A1",
        "social-brown": "#B8764D",
        "dark-text": "#111211",
        "pill-text": "#392C1A",
      },

      /* ── Spacing ───────────────────────────────────── */
      spacing: {
        "sidebar-w": "548px",
        "header-w": "890px",
        "13.5": "54px", // right panel horizontal padding (snapped to 2px grid)
      },

      /* ── Border Radius ─────────────────────────────── */
      borderRadius: {
        button: "16px",
      },

      /* ── Gap / Spacing tokens ──────────────────────── */
      gap: {
        nav: "24px",
        pills: "16px",
        social: "26px",
        sections: "8px",
      },

      /* ── Animations ─────────────────────────────────── */
      keyframes: {
        "slide-from-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-from-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "slide-from-right": "slide-from-right 0.3s ease-out forwards",
        "slide-from-left": "slide-from-left 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
