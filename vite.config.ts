
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Menggunakan base './' agar asset dapat dimuat dengan path relatif (penting untuk GitHub Pages)
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
  },
  // Menyediakan shim untuk process.env agar kode yang menggunakan process.env.API_KEY tetap bekerja di browser
  define: {
    'process.env': {
      API_KEY: JSON.stringify(process.env.API_KEY || '')
    }
  }
});
