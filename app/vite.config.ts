import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import inject from "@rollup/plugin-inject";

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    inject({
      Buffer: ["buffer", "Buffer"],
    }),
  ],
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
  define: {
    global: {},
    "process.env.NODE_DEBUG": JSON.stringify(""),
  },
  optimizeDeps: {
    include: ["buffer"],
  },
});
