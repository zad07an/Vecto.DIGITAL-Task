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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          violet: "#42426e",
          muted: "#8d8d8d",
          "muted-foreground": "#3d3d3d",
          blue: "#5900e9",
        },
        muted: {
          blue: "#2f0085",
        },
      },
    },
  },
  plugins: [],
};
export default config;
