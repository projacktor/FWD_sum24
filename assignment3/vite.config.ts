import { defineConfig } from 'vite';

export default defineConfig({
    base: "/FWD_sum24/",
    build: {
        outDir: 'dist',
        rollupOptions: {
            output: {
                entryFileNames: 'assets/[name].[hash].js',
                chunkFileNames: 'assets/[name].[hash].js',
                assetFileNames: 'assets/[name].[hash].[ext]'
            }
        }
    }
});
