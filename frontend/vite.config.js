import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    css: {
      minify: true,
    },
    assets: {
      // Enable long-term caching
      upload: {
        headers: {
          'Cache-Control': 'public, max-age=31536000',
        },
      },
    },
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries
          vendor: ['react', 'react-dom', 'framer-motion', 'firebase/app'],
          // Split admin-specific code
          admin: ['admin/**/*.js', 'Admin_Control/**/*.js']
        }
      }
    },
    // Enable tree-shaking
    target: 'modules',
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'firebase/app'],
  },
  server: {
    // Enable hot reload during development
    hmr: true
  }
})