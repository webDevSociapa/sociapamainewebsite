import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sociapareact/',
  server: {
    port: 3000,
    open: true
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
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
