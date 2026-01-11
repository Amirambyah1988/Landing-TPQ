import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Memastikan path relatif bekerja di subfolder github.io/Landing-TPQ/
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  define: {
    // Memberikan definisi aman untuk process agar tidak crash di browser
    'process.env': {
      API_KEY: JSON.stringify(process.env.API_KEY || ''),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    },
    'process.platform': JSON.stringify('browser')
  }
});