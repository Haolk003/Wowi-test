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
        primary: {
          DEFAULT: "#08afdc",
          dark: "#08afdc",
        },
        secondary: {
          DEFAULT: "#f04f47",
          dark: "#f04f47",
        },
        warning: {
          DEFAULT: "#ff5252",
          dark: "#ff5252",
        },
        "warning-light": {
          DEFAULT: "#ffecdc",
          dark: "#ffecdc",
        },
        purple: {
          DEFAULT: "#8745ff",
          dark: "#8745ff",
        },
        success: {
          DEFAULT: "#11c15b",
          dark: "#11c15b",
        },
        "success-light": {
          DEFAULT: "#d9f5e5",
          dark: "#d9f5e5",
        },
        yellow: {
          DEFAULT: "#F49820",
          dark: "#F49820",
        },
        orange: {
          DEFAULT: "#F77568",
          dark: "#F77568",
        },
        c: {
          DEFAULT: "#38b2ac",
          dark: "#38b2ac",
        },
        "text-primary": {
          DEFAULT: "#111827",
          dark: "#212121",
        },
        "text-secondary": {
          DEFAULT: "#6B7280",
          dark: "#E5E7EB",
        },
        "disabled-color": {
          DEFAULT: "#959CA9",
          dark: "#E0E0E0",
        },
        "sidebar-text": {
          DEFAULT: "#000000",
          dark: "#ffffff",
        },
        "sidebar-selected-text": {
          DEFAULT: "#ffffff",
          dark: "#000000",
        },
        body: {
          DEFAULT: "#F5F7FE",
          dark: "#1F2527",
        },
        box: {
          DEFAULT: "#FFFFFF",
          dark: "#2B3137",
        },
        "sidebar-bg": {
          DEFAULT: "#FFFFFF",
          dark: "#313541",
        },
        "sidebar-menu-selected-bg-color": {
          DEFAULT: "#f4f7f3",
          dark: "#f4f7fe",
        },
        G1: {
          DEFAULT: "#0A8FDC",
          dark: "#0A8FDC",
        },
        G2: {
          DEFAULT: "#B745FF",
          dark: "#B745FF",
        },
        G3: {
          DEFAULT: "#49BD65",
          dark: "#49BD65",
        },
        G4: {
          DEFAULT: "#F49820",
          dark: "#F49820",
        },
        G5: {
          DEFAULT: "#F44D50",
          dark: "#F44D50",
        },
        G6: {
          DEFAULT: "#F44",
        },
      },
      fontSize: {
        24: "24px",
        20: "20px",
        18: "18px",
        16: "16px",
        14: "14px",
        12: "12px",
      },
      lineHeight: {
        36: "36px",
        30: "30px",
        28: "28px",
        24: "24px",
        22: "22px",
        20: "20px",
        18: "18px",
      },
      fontWeight: {
        400: "400",
        500: "500",
      },
      fontFamily: {
        Poppins: ["var(--font-Poppins)", "sans-serif"],
        BeVietNam: ["var(--font-Be-VietNam-Pro)", "sans-serif"],
      },
      dropShadow: {
        "3xl": "0 10px 10px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
