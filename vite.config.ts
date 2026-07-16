import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" keeps the build portable (works on GitHub Pages user sites and subpaths)
export default defineConfig({
  plugins: [react()],
  base: "./",
});
