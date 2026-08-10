import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild',
    css: {
      minify: true,
      optimize: 'terser',
    },
    assets: {
      // Enable long-term caching
      upload: {
        headers: {
          'Cache-Control': 'public, max-age=31536000',
        },
      },
    },
    sourcemap: false, // Disable sourcemaps for production
    public: 'public',
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'firebase/app'],
  },
});