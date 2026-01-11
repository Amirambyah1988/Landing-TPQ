import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log("Inisialisasi TPQ Nurul Islam...");

const startApp = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("Elemen root tidak ditemukan!");
    return;
  }

  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("React berhasil dimuat.");
  } catch (error) {
    console.error("Gagal merender React:", error);
    // Jika gagal, tampilkan pesan error di layar agar user tahu apa yang salah
    rootElement.innerHTML = `<div style="padding: 20px; text-align: center; color: red;">
      Terjadi kesalahan saat memuat aplikasi. Silakan muat ulang halaman.
    </div>`;
  }
};

// Pastikan DOM sudah siap
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}