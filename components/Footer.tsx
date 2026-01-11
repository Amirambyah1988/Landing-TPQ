
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                NI
              </div>
              <span className="font-heading font-bold text-white text-xl">Nurul Islam</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Membangun fondasi iman dan kecintaan terhadap Al-Quran sejak usia dini melalui metode pengajaran modern dan inklusif.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Menu Navigasi</h4>
            <ul className="space-y-4">
              <li><a href="#profil" className="hover:text-emerald-500 transition-colors">Profil Lembaga</a></li>
              <li><a href="#visi-misi" className="hover:text-emerald-500 transition-colors">Visi & Misi</a></li>
              <li><a href="#pengelola" className="hover:text-emerald-500 transition-colors">Staff Pengelola</a></li>
              <li><a href="#dokumentasi" className="hover:text-emerald-500 transition-colors">Galeri Dokumentasi</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Link Cepat</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Pendaftaran Santri</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Kurikulum Belajar</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Jadwal Kelas</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Portal Orang Tua</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Jam Operasional</h4>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Senin - Kamis</span>
                <span className="text-white">15:30 - 17:30</span>
              </li>
              <li className="flex justify-between">
                <span>Jumat</span>
                <span className="text-white">Libur</span>
              </li>
              <li className="flex justify-between">
                <span>Sabtu - Minggu</span>
                <span className="text-white">08:00 - 11:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2024 TPQ Nurul Islam. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
