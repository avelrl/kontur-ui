import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist/theme",
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "src/kontur-theme.ts"),
      fileName: () => "kontur-theme.js",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
  },
});
