import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import {resolve} from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/FWD_sum24/",
  // build: {
  //   outDir: 'dist',
  //   rollupOptions: {
  //     input: {
  //       index: resolve(__dirname, "index.html"),
  //       comic: resolve(__dirname, "404.html"),
  //     }
  //   }
  // }
})
