import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
const analyze = process.env.ANALYZE === "true";

export default defineConfig({
  plugins: [
    react(),
    ...(analyze
      ? [
          // generate a bundle visualization HTML in dist/stats.html when ANALYZE=true
          visualizer({ filename: "dist/stats.html", open: false }),
        ]
      : []),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
});
