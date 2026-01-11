
import React, { useState } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup,
  updateProfile
} from "firebase/auth";
import { auth, googleProvider } from '../services/firebase';

interface AuthModalProps {
  mode: 'login' | 'register';
  onClose: () => void;
  setMode: (mode: 'login' | 'register') => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ mode, onClose, setMode }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (mode === 'register') {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: name });
        alert('Registrasi Berhasil!');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Berhasil Masuk!');
      }
      onClose();
    } catch (err: any) {
      console.error("Auth Error Code:", err.code);
      if (err.code === 'auth/invalid-api-key') {
        setError('Konfigurasi Firebase tidak valid. Hubungi Admin.');
      } else if (err.code === 'auth/network-request-failed') {
        setError('Koneksi internet terganggu.');
      } else {
        setError('Gagal masuk: ' + (err.message || 'Cek email/password Anda.'));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      onClose();
    } catch (err: any) {
      console.error("Google Login Error:", err);
      setError('Gagal masuk dengan Google.');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-scale-in">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0014 2c.518 0 1.023.041 1.517.121m-.733 12.481l.856.172a10.124 10.124 0 014.545 2.94M11.204 19.243l.733 1.247m5.196-5.196l1.247.733" />
              </svg>
            </div>
            <h2 className="text-2xl font-heading font-bold text-slate-900">
              {mode === 'login' ? 'Selamat Datang' : 'Buat Akun Santri'}
            </h2>
          </div>

          {error && <div className="mb-4 p-3 bg-rose-50 text-rose-600 text-sm rounded-xl border border-rose-100">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Nama Lengkap</label>
                <input required value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Nama Lengkap" />
              </div>
            )}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
              <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="email@anda.com" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Kata Sandi</label>
              <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="••••••••" />
            </div>

            <button disabled={loading} type="submit" className="w-full py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-700 transition-all flex items-center justify-center">
              {loading ? "Memproses..." : (mode === 'login' ? 'Masuk' : 'Daftar')}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
            <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-slate-500">Atau gunakan Google</span></div>
          </div>

          <button onClick={handleGoogleLogin} className="w-full py-3 border-2 border-slate-100 rounded-xl flex items-center justify-center space-x-3 hover:bg-slate-50 font-semibold text-slate-700 transition-colors">
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="Google" />
            <span>Google Login</span>
          </button>

          <p className="text-center mt-8 text-slate-600">
            {mode === 'login' ? 'Belum punya akun?' : 'Sudah punya akun?'}
            <button onClick={() => setMode(mode === 'login' ? 'register' : 'login')} className="ml-2 text-emerald-600 font-bold hover:underline">
              {mode === 'login' ? 'Daftar' : 'Masuk'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
