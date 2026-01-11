
import React from 'react';

interface HeroProps {
  onOpenRegister: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenRegister }) => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-sky-50 rounded-full blur-3xl opacity-60"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-bounce">
            <span className="flex h-2 w-2 rounded-full bg-emerald-600"></span>
            <span>Penerimaan Santri Baru Tahun 2024 Telah Dibuka</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-slate-900 leading-tight mb-6">
            Mencetak Generasi <span className="text-emerald-600">Qurani & Berakhlak</span> Mulia
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            TPQ Nurul Islam menghadirkan pendidikan Al-Quran yang menyenangkan, metodis, dan berorientasi pada pembentukan karakter islami sejak dini.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={onOpenRegister}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl shadow-xl shadow-emerald-200 hover:bg-emerald-700 transition-all transform hover:-translate-y-1 text-lg"
            >
              Daftar Santri Baru
            </button>
            <a 
              href="#profil"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 font-bold rounded-2xl border-2 border-slate-100 hover:border-emerald-200 hover:bg-slate-50 transition-all text-lg"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-slate-900">500+</span>
              <span className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Santri Aktif</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-slate-900">25+</span>
              <span className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Ustadz & Ustadzah</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-slate-900">10+</span>
              <span className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Program Belajar</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-slate-900">15th</span>
              <span className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Pengalaman</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual Image/Banner Placeholder */}
      <div className="container mx-auto px-4 mt-16 flex justify-center">
        <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
          <img 
            src="https://picsum.photos/seed/tpq/1200/675" 
            alt="Kegiatan Belajar TPQ" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
            <p className="font-semibold text-lg hidden md:block">Metode pembelajaran modern & menyenangkan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
