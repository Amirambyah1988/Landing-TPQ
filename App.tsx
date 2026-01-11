
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from './services/firebase';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import VisionMission from './components/VisionMission';
import Management from './components/Management';
import Documentation from './components/Documentation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    }, (error) => {
      console.error("Auth State Error:", error);
    });
    return () => unsubscribe();
  }, []);

  const openAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      alert('Berhasil keluar.');
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onOpenAuth={openAuth} user={user} onLogout={handleLogout} />
      
      <main className="flex-grow">
        <section id="beranda"><Hero onOpenRegister={() => openAuth('register')} /></section>
        <section id="profil" className="py-20 bg-white"><Profile /></section>
        <section id="visi-misi" className="py-20 bg-slate-50"><VisionMission /></section>
        <section id="pengelola" className="py-20 bg-white"><Management /></section>
        <section id="dokumentasi" className="py-20 bg-slate-50"><Documentation /></section>
        <section id="kontak" className="py-20 bg-white"><Contact /></section>
      </main>

      <Footer />
      <AIChat />

      {isAuthModalOpen && (
        <AuthModal mode={authMode} onClose={() => setIsAuthModalOpen(false)} setMode={setAuthMode} />
      )}
    </div>
  );
};

export default App;
