/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', "ui-monospace", "Menlo", "Consolas", "monospace"],
        sans: ["Inter", "system-ui", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lab: {
          primary: "#39d98a",
          "primary-content": "#04110a",
          secondary: "#4cc3ff",
          accent: "#39d98a",
          neutral: "#1e2d3a",
          "base-100": "#0a0f14",
          "base-200": "#111a22",
          "base-300": "#1e2d3a",
          "base-content": "#d6e2ea",
          info: "#4cc3ff",
          success: "#39d98a",
          warning: "#f0a500",
          error: "#ff5d5d",
          "--rounded-box": "0.6rem",
          "--rounded-btn": "0.4rem",
          "--rounded-badge": "0.3rem",
        },
      },
    ],
    darkTheme: "lab",
    logs: false,
  },
};
