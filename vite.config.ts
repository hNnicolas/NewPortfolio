import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Keep React in its own long-lived chunk so app edits don't invalidate it.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react")) return "react";
          if (id.includes("node_modules/react-icons")) return "icons";
        },
      },
    },
    cssCodeSplit: true,
    reportCompressedSize: false,
  },
});
