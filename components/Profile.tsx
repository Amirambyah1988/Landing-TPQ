
import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-600 rounded-2xl -z-10 opacity-10"></div>
          <img 
            src="https://picsum.photos/seed/building/800/600" 
            alt="Gedung TPQ Nurul Islam" 
            className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-slate-100">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622l-.982-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-900 font-bold">Terakreditasi A</p>
                <p className="text-slate-500 text-sm">Oleh Kemenag RI</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900">
            Mengenal Lebih Dekat <br/>
            <span className="text-emerald-600">TPQ Nurul Islam</span>
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            Berdiri sejak tahun 2009, TPQ Nurul Islam merupakan lembaga pendidikan non-formal yang berkomitmen tinggi dalam memberikan bimbingan baca tulis Al-Quran bagi anak-anak usia prasekolah hingga remaja.
          </p>
          <p className="text-slate-600 leading-relaxed text-lg">
            Kami menerapkan metode Yanbu'a yang dipadukan dengan pendekatan pengajaran kreatif, memastikan setiap santri tidak hanya mahir membaca Al-Quran, tetapi juga mencintainya sebagai pedoman hidup.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {[
              "Pengajar Bersertifikat",
              "Kurikulum Standar Nasional",
              "Lingkungan Islami & Kondusif",
              "Kegiatan Ekstrakurikuler Seru"
            ].map((feature, i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-800 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
