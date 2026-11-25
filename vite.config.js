import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite Configuration
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    host: true,
    port: 3000,
    open: true,
    proxy: {
      '/sociapareact/admin': {
        target: 'http://localhost',
        changeOrigin: true,
      }
    },
    watch: {
      ignored: ['**/*.zip', '**/*.rar', '**/*.7z', '**/*.tar.gz', '**/public/assets/**', '**/dist/**', '**/*.png', '**/*.jpg', '**/*.webp']
    }
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.woff2')) {
            return 'assets/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion') || id.includes('gsap')) {
              return 'vendor-anim';
            }
            return 'vendor-core'; // all other dependencies
          }
        }
      }
    }
  }
})
