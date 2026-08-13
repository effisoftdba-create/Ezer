import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'sync-dist-output',
      closeBundle() {
        try {
          const rootDist = path.resolve(__dirname, '../dist');
          const frontendDist = path.resolve(__dirname, 'dist');
          if (fs.existsSync(rootDist)) {
            if (!fs.existsSync(frontendDist)) {
              fs.mkdirSync(frontendDist, { recursive: true });
            }
            fs.cpSync(rootDist, frontendDist, { recursive: true, force: true });
          }
        } catch (err) {
          console.warn('Could not sync dist folders:', err.message);
        }
      }
    }
  ],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    minify: 'esbuild',
    sourcemap: false,
    target: 'modules',
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('firebase')) {
            return 'vendor-firebase';
          }
          if (id.includes('framer-motion')) {
            return 'vendor-motion';
          }
          if (id.includes('node_modules')) {
            return 'vendor';
          }
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
});