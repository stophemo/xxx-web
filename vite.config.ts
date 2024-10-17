import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
  /* 开发环境配置 */
  server:{
    /* 代理目录 */
    proxy:{
      '^/api':{
        target:'http://127.0.0.1:9898',
        ws: true,
        changeOrigin: true
      }
    }
  }
});
