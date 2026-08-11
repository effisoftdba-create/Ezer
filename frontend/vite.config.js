import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild',
    sourcemap: false,
    target: 'modules',
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        // Use a function for manualChunks — glob patterns are NOT supported
        manualChunks(id) {
          // Firebase into its own chunk (very large)
          if (id.includes('firebase')) {
            return 'vendor-firebase';
          }
          // Framer Motion into its own chunk
          if (id.includes('framer-motion')) {
            return 'vendor-motion';
          }
          // Other node_modules into vendor chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          // Admin panel code into its own chunk
          if (id.includes('Admin_Control') || id.includes('admin')) {
            return 'AdminDashboard';
          }
        }
      }
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'firebase/app'],
  },
  server: {
    hmr: true
  }
})