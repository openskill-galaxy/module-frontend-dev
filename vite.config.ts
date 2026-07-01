import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";

// 项目站点 module-frontend-dev，部署在子路径 /module-frontend-dev/，base 必须设置
export default defineConfig({
  base: "/module-frontend-dev/",
  plugins: [react as unknown as PluginOption],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
