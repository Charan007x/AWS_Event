import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Output directory for production build
    outDir: 'dist',
    // Generate source maps for debugging (set to false for smaller bundle)
    sourcemap: false,
    // Minify with esbuild for faster builds
    minify: 'esbuild',
    // Chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Rollup options for code splitting
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
        // Asset file naming
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          let extType = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images'
          } else if (/woff|woff2|ttf|otf|eot/i.test(extType)) {
            extType = 'fonts'
          }
          return `assets/${extType}/[name]-[hash][extname]`
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Optimize dependencies
    target: 'es2015',
    cssCodeSplit: true,
    // Report compressed size
    reportCompressedSize: true,
  },
  // Preview server configuration
  preview: {
    port: 4173,
    strictPort: false,
    open: true,
  },
  // Development server configuration
  server: {
    port: 5173,
    strictPort: false,
    open: true,
  },
})
