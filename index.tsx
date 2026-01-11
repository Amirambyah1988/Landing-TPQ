import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log("Aplikasi sedang diinisialisasi...");

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Gagal menemukan elemen root!");
  throw new Error("Could not find root element to mount to");
}

try {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("React berhasil dirender ke DOM.");
} catch (error) {
  console.error("Terjadi error saat merender aplikasi:", error);
}