import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // src/utils/supabase.ts loads professors with top-level await.
    target: 'es2022',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0', // Allow access from the network
    port: 5173,      // Optional: Set the port
  },
});
