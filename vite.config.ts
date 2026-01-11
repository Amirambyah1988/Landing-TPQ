
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    host: true,
  },
  // Menggunakan pendefinisian variabel yang lebih aman untuk lingkungan browser
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || '')
  }
});
