
import React from 'react';

const VisionMission: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mb-4">Visi & Misi</h2>
        <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Vision Card */}
        <div className="bg-emerald-600 text-white p-8 md:p-12 rounded-[2rem] shadow-2xl transform transition-transform hover:-translate-y-2">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">Visi Kami</h3>
          <p className="text-emerald-50 leading-relaxed text-xl font-medium">
            "Menjadi lembaga pendidikan Al-Quran unggulan yang mencetak generasi qurani, cerdas, berakhlaqul karimah, dan mandiri."
          </p>
        </div>

        {/* Mission List */}
        <div className="space-y-6">
          <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6 flex items-center">
            <svg className="w-8 h-8 text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 2v4a2 2 0 002 2h4" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10h10M7 14h10M7 18h6" />
            </svg>
            Misi Strategis
          </h3>
          
          <div className="space-y-4">
            {[
              "Menyelenggarakan pendidikan baca tulis Al-Quran dengan metode yang mudah dan menyenangkan.",
              "Menanamkan nilai-nilai adab dan akhlak islami dalam setiap aspek pembelajaran.",
              "Mengembangkan potensi minat dan bakat santri melalui kegiatan kreatif dan edukatif.",
              "Menjalin sinergi yang kuat antara guru, orang tua, dan masyarakat."
            ].map((mission, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start space-x-4">
                <div className="bg-emerald-100 text-emerald-700 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </div>
                <p className="text-slate-700 font-medium leading-relaxed">{mission}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
