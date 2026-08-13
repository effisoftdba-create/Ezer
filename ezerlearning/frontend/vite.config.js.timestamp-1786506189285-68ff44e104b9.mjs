// vite.config.js
import { defineConfig } from "file:///C:/Ezer/guvi-design/Ezer_Website/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Ezer/guvi-design/Ezer_Website/frontend/node_modules/@vitejs/plugin-react/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [react()],
  build: {
    minify: "esbuild",
    sourcemap: false,
    target: "modules",
    commonjsOptions: {
      transformMixedEsModules: true
    },
    rollupOptions: {
      output: {
        // Use a function for manualChunks — glob patterns are NOT supported
        manualChunks(id) {
          if (id.includes("firebase")) {
            return "vendor-firebase";
          }
          if (id.includes("framer-motion")) {
            return "vendor-motion";
          }
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("Admin_Control") || id.includes("admin")) {
            return "AdminDashboard";
          }
        }
      }
    }
  },
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion", "firebase/app"]
  },
  server: {
    hmr: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxFemVyXFxcXGd1dmktZGVzaWduXFxcXEV6ZXJfV2Vic2l0ZVxcXFxmcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcRXplclxcXFxndXZpLWRlc2lnblxcXFxFemVyX1dlYnNpdGVcXFxcZnJvbnRlbmRcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L0V6ZXIvZ3V2aS1kZXNpZ24vRXplcl9XZWJzaXRlL2Zyb250ZW5kL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIGJ1aWxkOiB7XG4gICAgbWluaWZ5OiAnZXNidWlsZCcsXG4gICAgc291cmNlbWFwOiBmYWxzZSxcbiAgICB0YXJnZXQ6ICdtb2R1bGVzJyxcbiAgICBjb21tb25qc09wdGlvbnM6IHtcbiAgICAgIHRyYW5zZm9ybU1peGVkRXNNb2R1bGVzOiB0cnVlLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIC8vIFVzZSBhIGZ1bmN0aW9uIGZvciBtYW51YWxDaHVua3MgXHUyMDE0IGdsb2IgcGF0dGVybnMgYXJlIE5PVCBzdXBwb3J0ZWRcbiAgICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XG4gICAgICAgICAgLy8gRmlyZWJhc2UgaW50byBpdHMgb3duIGNodW5rICh2ZXJ5IGxhcmdlKVxuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnZmlyZWJhc2UnKSkge1xuICAgICAgICAgICAgcmV0dXJuICd2ZW5kb3ItZmlyZWJhc2UnO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBGcmFtZXIgTW90aW9uIGludG8gaXRzIG93biBjaHVua1xuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnZnJhbWVyLW1vdGlvbicpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3ZlbmRvci1tb3Rpb24nO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBPdGhlciBub2RlX21vZHVsZXMgaW50byB2ZW5kb3IgY2h1bmtcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3ZlbmRvcic7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEFkbWluIHBhbmVsIGNvZGUgaW50byBpdHMgb3duIGNodW5rXG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdBZG1pbl9Db250cm9sJykgfHwgaWQuaW5jbHVkZXMoJ2FkbWluJykpIHtcbiAgICAgICAgICAgIHJldHVybiAnQWRtaW5EYXNoYm9hcmQnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGluY2x1ZGU6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ2ZyYW1lci1tb3Rpb24nLCAnZmlyZWJhc2UvYXBwJ10sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIGhtcjogdHJ1ZVxuICB9XG59KSJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVQsU0FBUyxvQkFBb0I7QUFDcFYsT0FBTyxXQUFXO0FBRWxCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsSUFDWCxRQUFRO0FBQUEsSUFDUixpQkFBaUI7QUFBQSxNQUNmLHlCQUF5QjtBQUFBLElBQzNCO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUE7QUFBQSxRQUVOLGFBQWEsSUFBSTtBQUVmLGNBQUksR0FBRyxTQUFTLFVBQVUsR0FBRztBQUMzQixtQkFBTztBQUFBLFVBQ1Q7QUFFQSxjQUFJLEdBQUcsU0FBUyxlQUFlLEdBQUc7QUFDaEMsbUJBQU87QUFBQSxVQUNUO0FBRUEsY0FBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQy9CLG1CQUFPO0FBQUEsVUFDVDtBQUVBLGNBQUksR0FBRyxTQUFTLGVBQWUsS0FBSyxHQUFHLFNBQVMsT0FBTyxHQUFHO0FBQ3hELG1CQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxTQUFTLGFBQWEsaUJBQWlCLGNBQWM7QUFBQSxFQUNqRTtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sS0FBSztBQUFBLEVBQ1A7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
