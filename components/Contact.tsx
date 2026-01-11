
import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../services/firebase';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "inquiries"), {
        ...formData,
        createdAt: serverTimestamp()
      });
      alert('Pesan terkirim! Admin akan menghubungi Anda.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      console.error("Firestore Error:", error);
      alert('Gagal mengirim pesan: ' + (error.message || 'Cek koneksi Anda.'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mb-6">Hubungi Kami</h2>
          <p className="text-slate-600 mb-8 text-lg">Ada pertanyaan mengenai pendaftaran santri baru atau program kami? Silakan hubungi admin kami.</p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div><h4 className="font-bold text-slate-900">Alamat</h4><p className="text-slate-600">Jl. Kyai Haji Wahid Hasyim No. 123, Sukamanah, Kec. Cipedes, Tasikmalaya, Jawa Barat 46131</p></div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div><h4 className="font-bold text-slate-900">Telepon / WhatsApp</h4><p className="text-slate-600">+62 812-3456-7890</p></div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Nama Lengkap</label>
                  <input required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none" placeholder="Contoh: Budi Santoso" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                  <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none" placeholder="email@anda.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Perihal</label>
                <input required value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none" placeholder="Informasi Pendaftaran" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Pesan</label>
                <textarea required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none h-32" placeholder="Ketik pesan Anda di sini..."></textarea>
              </div>
              <button disabled={loading} type="submit" className="w-full py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-700 transition-all flex items-center justify-center">
                {loading ? "Mengirim..." : "Kirim Pesan"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
