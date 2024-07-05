import { defineConfig } from 'vite';
import { resolve } from "path";

export default defineConfig({
    base: "/FWD_sum24/",
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                index: resolve(__dirname, "index.html"),
                comic: resolve(__dirname, "comic.html"),
            }
        }
    }
});
