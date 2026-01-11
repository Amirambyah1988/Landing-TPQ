
import React from 'react';

const staffMembers = [
  {
    name: "KH. Ahmad Fauzi, M.Pd.I",
    role: "Kepala Lembaga",
    bio: "Berdedikasi lebih dari 20 tahun dalam dunia pendidikan Islam dan pengembangan kurikulum Al-Quran.",
    image: "https://picsum.photos/seed/ustadz1/400/500"
  },
  {
    name: "Ustadzah Siti Aminah",
    role: "Kepala Kurikulum",
    bio: "Hafidzah 30 Juz yang memiliki sertifikasi pengajaran metode Yanbu'a tingkat nasional.",
    image: "https://picsum.photos/seed/ustadzah1/400/500"
  },
  {
    name: "Ustadz Ridwan Malik",
    role: "Kesiswaan & IT",
    bio: "Inovator pembelajaran berbasis digital yang membantu santri belajar dengan media interaktif.",
    image: "https://picsum.photos/seed/ustadz2/400/500"
  },
  {
    name: "Ibu Rahayu Ningsih",
    role: "Administrasi & Keuangan",
    bio: "Mengelola manajemen operasional dengan transparan dan profesional demi kenyamanan wali santri.",
    image: "https://picsum.photos/seed/staff1/400/500"
  }
];

const Management: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mb-4">Pengelola Lembaga</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">Dipandu oleh tenaga pendidik dan profesional yang kompeten serta berdedikasi tinggi.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {staffMembers.map((staff, idx) => (
          <div key={idx} className="group bg-slate-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-100">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img 
                src={staff.image} 
                alt={staff.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-sm italic">"{staff.bio}"</p>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-1">{staff.name}</h3>
              <p className="text-emerald-600 font-semibold">{staff.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Management;
