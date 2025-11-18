import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  base: "./",
  server: {
    host: true,
    allowedHosts: [
      "cheap-shop-two.vercel.app"
    ],
  },
  preview: {
    host: true,
    allowedHosts: [
      "cheap-shop-two.vercel.app"
    ],
  },
});
