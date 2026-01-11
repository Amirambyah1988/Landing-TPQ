
import React, { useState } from 'react';

const categories = ["Semua", "Kegiatan Belajar", "Ramadan", "Wisuda", "Lomba"];

const images = [
  { url: "https://picsum.photos/seed/study1/600/600", category: "Kegiatan Belajar", title: "Belajar Makhorijul Huruf" },
  { url: "https://picsum.photos/seed/ramadan1/600/400", category: "Ramadan", title: "Buka Puasa Bersama" },
  { url: "https://picsum.photos/seed/grad1/600/600", category: "Wisuda", title: "Wisuda Santri angkatan 2023" },
  { url: "https://picsum.photos/seed/contest1/600/400", category: "Lomba", title: "Lomba Tartil Al-Quran" },
  { url: "https://picsum.photos/seed/study2/600/400", category: "Kegiatan Belajar", title: "Hafalan Surat Pendek" },
  { url: "https://picsum.photos/seed/ramadan2/600/600", category: "Ramadan", title: "Khataman Quran" },
];

const Documentation: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredImages = activeCategory === "Semua" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mb-4">Dokumentasi Kegiatan</h2>
        <p className="text-slate-600">Momen berharga santri dalam perjalanan menghafal dan memahami Al-Quran.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeCategory === cat 
                ? 'bg-emerald-600 text-white shadow-lg' 
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((img, idx) => (
          <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-lg h-80">
            <img 
              src={img.url} 
              alt={img.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">{img.category}</span>
              <h4 className="text-white font-bold text-lg">{img.title}</h4>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-white text-emerald-600 font-bold rounded-xl border-2 border-emerald-100 hover:bg-emerald-50 transition-all">
          Lihat Galeri Selengkapnya
        </button>
      </div>
    </div>
  );
};

export default Documentation;
