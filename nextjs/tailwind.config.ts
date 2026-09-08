import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        clark: {
          DEFAULT: "#0043c8", // Clark Wire & Cable blue
          dark: "#002f8f",
          ink: "#10233c",
          body: "#22344c",
          muted: "#6b7a8d",
          line: "#e3e8ef",
          hair: "#edf1f6",
          canvas: "#f5f7fa",
          tint: "#eef4ff",
        },
        ok: { bg: "#e7f6ec", fg: "#17603a" },
        warn: { bg: "#fdf3dd", fg: "#8a5a10" },
        info: { bg: "#e8f1fe", fg: "#1c4595" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      gridTemplateColumns: {
        schedule: "100px 1.35fr 1.5fr 1.4fr 0.8fr 1.15fr",
      },
    },
  },
  plugins: [],
};
export default config;
