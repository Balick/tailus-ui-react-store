import type { Config } from "tailwindcss";
import {
  shade,
  rounded,
  animations,
  components,
  grays,
  palettes,
} from "@tailus/themer";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@tailus/themer/dist/components/**/*.{js,ts}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        ...palettes.trust,
        gray: grays.neutral,
      },
    },
  },
  plugins: [shade, components, animations, rounded],
};

export default config;
