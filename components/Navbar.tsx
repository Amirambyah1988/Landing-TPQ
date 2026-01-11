
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
  user?: any;
  onLogout?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAuth, user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menangani scroll lock saat menu mobile terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { label: 'Profil', href: '#profil' },
    { label: 'Visi & Misi', href: '#visi-misi' },
    { label: 'Pengelola', href: '#pengelola' },
    { label: 'Dokumentasi', href: '#dokumentasi' },
    { label: 'Kontak', href: '#kontak' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <a href="#beranda" onClick={(e) => handleLinkClick(e, '#beranda')} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">NI</div>
            <span className={`font-heading font-bold text-xl tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-800'}`}>Nurul Islam</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">{link.label}</a>
            ))}
            
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm font-semibold text-slate-700">Halo, {user.displayName?.split(' ')[0] || 'Santri'}</span>
                <button onClick={onLogout} className="px-5 py-2 text-rose-600 font-semibold hover:bg-rose-50 rounded-full transition-colors">Keluar</button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <button onClick={() => onOpenAuth('login')} className="px-5 py-2 text-emerald-600 font-semibold hover:bg-emerald-50 rounded-full transition-colors">Masuk</button>
                <button onClick={() => onOpenAuth('register')} className="px-6 py-2 bg-emerald-600 text-white font-semibold rounded-full shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all">Daftar</button>
              </div>
            )}
          </div>

          {/* Hamburger Button */}
          <button 
            className={`lg:hidden p-2 rounded-xl transition-colors ${scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-slate-800 hover:bg-white/20'}`} 
            onClick={() => setIsOpen(true)}
            aria-label="Buka Menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16m-7 6h7" strokeWidth={2.5} strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`fixed inset-0 z-[70] lg:hidden transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop overlay */}
        <div 
          className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        ></div>
        
        {/* Sidebar drawer */}
        <div className={`absolute top-0 right-0 h-full w-[80%] max-w-[320px] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 flex justify-between items-center border-b border-slate-50">
            <span className="font-heading font-bold text-lg text-emerald-600">Menu</span>
            <button onClick={() => setIsOpen(false)} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-grow overflow-y-auto py-4 px-6 space-y-1">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)} 
                className="block py-3 px-4 text-slate-700 font-semibold text-lg hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="p-6 border-t border-slate-50 space-y-3">
            {user ? (
              <>
                <div className="flex items-center space-x-3 px-4 py-2 bg-emerald-50 rounded-xl mb-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {user.displayName?.charAt(0) || 'S'}
                  </div>
                  <span className="text-sm font-bold text-emerald-800 truncate">{user.displayName || 'Santri'}</span>
                </div>
                <button onClick={() => { onLogout?.(); setIsOpen(false); }} className="w-full py-4 bg-rose-50 text-rose-600 font-bold rounded-xl hover:bg-rose-100 transition-all">Keluar Akun</button>
              </>
            ) : (
              <>
                <button onClick={() => { onOpenAuth('login'); setIsOpen(false); }} className="w-full py-3.5 text-emerald-600 font-bold border-2 border-emerald-600 rounded-xl hover:bg-emerald-50 transition-all">Masuk</button>
                <button onClick={() => { onOpenAuth('register'); setIsOpen(false); }} className="w-full py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition-all">Daftar Sekarang</button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
