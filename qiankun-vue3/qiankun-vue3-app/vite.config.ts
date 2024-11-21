import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    qiankun("vue3app", {
      useDevMode: true,
    }),
  ],
  // 如果是线上构建，需要指定 base
  base: "https://xx",
  server: {
    port: 8081,
  },
});
