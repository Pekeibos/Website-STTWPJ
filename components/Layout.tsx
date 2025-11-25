import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Facebook, Instagram, Youtube, Twitter, ChevronDown, ChevronUp, Search, Moon, Sun, MapPin } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Beranda', path: '/' },
  { 
    label: 'Profil', 
    path: '/profil/sejarah',
    subItems: [
      { label: 'Sejarah STT WPJ', path: '/profil/sejarah' },
      { label: 'Visi & Misi', path: '/profil/visi-misi' },
      { label: 'Nilai-Nilai', path: '/profil/nilai' },
      { label: 'Akreditasi', path: '/profil/akreditasi' },
      { label: 'Struktur Organisasi', path: '/profil/struktur' },
      { label: 'Galeri Multimedia', path: '/profil/galeri' },
    ]
  },
  { 
    label: 'Program Studi', 
    path: '/program-studi/s1-teologi',
    subItems: [
      { label: 'S1 Teologi (S.Th)', path: '/program-studi/s1-teologi' },
      { label: 'S1 Pendidikan Agama Kristen (S.Pd)', path: '/program-studi/s1-pak' },
      { label: 'S2 Magister Teologi (M.Th)', path: '/program-studi/s2-teologi' },
      { label: 'S2 Magister PAK (M.Pd)', path: '/program-studi/s2-pak' },
      { label: 'Fasilitas Akademik', path: '/program-studi/fasilitas' },
    ]
  },
  { 
    label: 'Dosen', 
    path: '/dosen/pendidik',
    subItems: [
      { label: 'Dosen (Pendidik)', path: '/dosen/pendidik' },
      { label: 'Staf (Kependidikan)', path: '/dosen/staf' },
    ] 
  },
  {
    label: 'Alumni & Mahasiswa',
    path: '#',
    subItems: [
      { label: 'Organisasi Mahasiswa', path: '/mahasiswa/organisasi' },
      { label: 'Kegiatan Mahasiswa', path: '/mahasiswa/kegiatan' },
      { label: 'Profil Alumni', path: '/alumni/profil' },
      { label: 'Tracer Study', path: '/alumni/tracer-study' },
    ]
  },
  { 
    label: 'Layanan', 
    path: '#',
    subItems: [
      { label: 'PMB (Pendaftaran)', path: '/layanan/pmb' },
      { label: 'SiAkad', path: '/layanan/siakad' },
      { label: 'E-Learning', path: '/layanan/elearning' },
      { label: 'E-Library', path: '/layanan/elibrary' },
      { label: 'E-Jurnal', path: '/layanan/ejurnal' },
    ]
  },
  { 
    label: 'Berita', 
    path: '/berita/terkini',
    subItems: [
      { label: 'Berita Terkini', path: '/berita/terkini' },
      { label: 'Artikel', path: '/berita/artikel' },
      { label: 'Informasi', path: '/berita/informasi' },
    ]
  },
  { label: 'Kontak', path: '/kontak' },
];

const STTLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 120 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M10 20 Q 60 -5 110 20 L 110 85 Q 60 135 10 85 L 10 20 Z" 
      fill="#ffffff" 
      stroke="#000000" 
      strokeWidth="3"
    />
    <path id="textCurve" d="M 18 55 Q 60 25 102 55" fill="transparent"/>
    <text fontSize="8" fontWeight="bold" fill="#000000" fontFamily="sans-serif" textAnchor="middle">
      <textPath href="#textCurve" startOffset="50%" textLength="90">SEKOLAH TINGGI TEOLOGI</textPath>
    </text>
    <text x="60" y="65" textAnchor="middle" fontSize="9" fontWeight="900" fill="#000000" fontFamily="serif">Walter Post</text>
    <g transform="translate(35, 70)">
       <path d="M0 5 Q 25 0 50 5 L 50 20 Q 25 15 0 20 Z" fill="white" stroke="black" strokeWidth="1"/>
       <path d="M25 5 L 25 20" stroke="black" strokeWidth="0.5"/>
       <path d="M25 2 L 25 18" stroke="#ce2029" strokeWidth="2" />
       <path d="M20 8 L 30 8" stroke="#ce2029" strokeWidth="2" />
       <path d="M10 8 L 15 8 L 15 15 L 10 15 Z" fill="none" stroke="#1e3a8a" strokeWidth="1.5" />
       <path d="M10 8 Q 5 10 10 15" fill="none" stroke="#1e3a8a" strokeWidth="1.5" />
       <path d="M38 8 L 42 8 L 40 15 Z" fill="none" stroke="green" strokeWidth="1.5" />
       <path d="M36 8 Q 40 18 44 8" fill="none" stroke="green" strokeWidth="1.5" />
    </g>
    <text x="60" y="110" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#000000" fontFamily="sans-serif">JAYAPURA</text>
    <text x="60" y="122" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#000000" fontFamily="sans-serif">PAPUA</text>
  </svg>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    // Smooth loading simulation
    setIsLoading(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); 
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Mencari: ${searchQuery}`);
      setSearchQuery('');
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans relative dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      
      {/* Smooth Page Load Overlay */}
      <div 
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-gray-950 transition-all duration-500 ease-in-out pointer-events-none ${
            isLoading ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className={`transform transition-all duration-500 ${isLoading ? 'scale-100 translate-y-0' : 'scale-90 translate-y-4'}`}>
            <STTLogo className="w-24 h-24 mx-auto mb-6 animate-pulse" />
            <div className="h-1 w-48 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mx-auto">
                <div className="h-full bg-primary dark:bg-blue-500 w-full animate-progress origin-left"></div>
            </div>
            <p className="mt-4 text-gray-400 dark:text-gray-500 font-bold text-xs tracking-[0.2em] text-center uppercase">Memuat Halaman...</p>
        </div>
      </div>

      {/* Top Bar */}
      <div className="bg-primary dark:bg-gray-900 text-white py-2 text-sm hidden md:block transition-colors border-b border-blue-900 dark:border-gray-800">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"><Phone size={14} className="text-accent" /> +62 967 1234567</span>
            <span className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"><Mail size={14} className="text-accent" /> kontak@sttwpj.ac.id</span>
          </div>
          <div className="flex space-x-4 items-center">
            <Link to="/layanan/siakad" className="hover:text-accent transition-colors">SiAkad</Link>
            <Link to="/layanan/elearning" className="hover:text-accent transition-colors">E-Learning</Link>
            <div className="flex items-center space-x-3 border-l border-blue-700 pl-4 ml-2">
              <a href="https://facebook.com" className="text-blue-200 hover:text-[#1877F2] transition-colors"><Facebook size={16} /></a>
              <a href="https://instagram.com" className="text-blue-200 hover:text-[#E4405F] transition-colors"><Instagram size={16} /></a>
              <a href="https://youtube.com" className="text-blue-200 hover:text-[#FF0000] transition-colors"><Youtube size={16} /></a>
              <a href="https://twitter.com" className="text-blue-200 hover:text-[#1DA1F2] transition-colors"><Twitter size={16} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 w-full ${
          isScrolled 
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-2' 
            : 'bg-white dark:bg-gray-900 py-4 shadow-sm'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="transition-transform duration-300 group-hover:scale-105">
                <STTLogo className="w-12 h-12 md:w-16 md:h-16" />
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-lg md:text-xl leading-tight font-serif ${isScrolled ? 'text-primary dark:text-blue-400' : 'text-gray-900 dark:text-white'}`}>
                  STT WALTER POST
                </span>
                <span className="text-[10px] md:text-xs font-bold text-accent tracking-[0.25em]">JAYAPURA</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative group px-2">
                  <Link
                    to={item.path}
                    className={`text-[13px] xl:text-sm font-bold uppercase tracking-wide transition-colors duration-200 flex items-center gap-1 py-2 ${
                      location.pathname.includes(item.path) && item.path !== '/' 
                        ? 'text-primary dark:text-blue-400' 
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400'
                    }`}
                  >
                    {item.label}
                    {item.subItems && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300 opacity-50" />}
                  </Link>
                  
                  {/* Desktop Dropdown */}
                  {item.subItems && (
                    <div className="absolute left-0 mt-0 w-60 bg-white dark:bg-gray-800 border-t-4 border-accent rounded-b-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-50 pointer-events-none group-hover:pointer-events-auto">
                      <div className="py-2">
                        {item.subItems.map((sub, idx) => (
                          <Link 
                            key={idx} 
                            to={sub.path} 
                            className="block px-5 py-3 text-sm text-gray-600 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary dark:hover:text-blue-400 transition-colors border-b border-gray-50 dark:border-gray-700 last:border-0"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {/* Search Bar Desktop */}
              <div className="relative group ml-2">
                 <form onSubmit={handleSearch} className="flex items-center">
                    <input 
                      type="text" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Cari..." 
                      className="w-0 group-hover:w-32 focus:w-32 transition-all duration-300 overflow-hidden bg-gray-100 dark:bg-gray-800 border-none rounded-full px-0 group-hover:px-4 focus:px-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary dark:text-white"
                    />
                    <button type="submit" className="p-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors">
                      <Search size={20} />
                    </button>
                 </form>
              </div>

              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme} 
                className="p-2 ml-1 rounded-full text-gray-500 dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center gap-2">
               <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full text-gray-600 dark:text-yellow-400"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button 
                className="text-gray-800 dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Refined Mobile Menu */}
        <div 
          className={`lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'max-h-screen opacity-100 shadow-xl' : 'max-h-0 opacity-0'
          }`}
        >
            <div className="flex flex-col py-6 px-6 space-y-2 overflow-y-auto max-h-[85vh]">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-6 relative">
                 <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari informasi..." 
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary dark:text-white transition-all"
                 />
                 <Search className="absolute left-4 top-3.5 text-gray-400" size={18} />
              </form>

              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-50 dark:border-gray-800/50 last:border-0">
                  <div className="flex justify-between items-center py-3 group">
                     <Link
                      to={item.path}
                      className={`text-base font-bold flex-grow ${
                        location.pathname === item.path ? 'text-primary dark:text-blue-400' : 'text-gray-800 dark:text-gray-200 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors'
                      }`}
                      onClick={() => !item.subItems && setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.subItems && (
                        <ChevronDown size={18} className="text-gray-400 group-hover:text-primary" />
                    )}
                  </div>
                 
                  {item.subItems && (
                    <div className="pl-6 border-l-2 border-gray-100 dark:border-gray-700 ml-4 mb-3 space-y-1">
                      {item.subItems.map((sub, idx) => (
                         <Link
                          key={idx}
                          to={sub.path}
                          className="block text-sm text-gray-600 dark:text-gray-400 py-2 pl-4 hover:text-primary dark:hover:text-blue-400 hover:translate-x-1 transition-all rounded-r-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
                          onClick={() => {
                              setIsMobileMenuOpen(false);
                          }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-6 pb-20">
                <Link to="/layanan/pmb" className="bg-secondary text-white text-center py-4 rounded-lg font-bold block shadow-lg hover:bg-red-800 hover:shadow-xl transition-all active:scale-95" onClick={() => setIsMobileMenuOpen(false)}>
                    Daftar Mahasiswa Baru
                </Link>
              </div>
            </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <div key={location.pathname} className="animate-fade-in">
          {children}
        </div>
      </main>

      {/* Back to Top Button with Smooth Zoom Animation */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-6 z-40 bg-primary dark:bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-accent dark:hover:bg-blue-500 transition-all duration-300 flex items-center justify-center group transform ${
          showBackToTop ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Kembali ke atas"
      >
        <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
      </button>

      {/* Footer */}
      <footer className="bg-primary dark:bg-gray-950 text-white pt-16 pb-8 border-t-4 border-accent">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
            
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white p-1 rounded-lg flex-shrink-0">
                   <STTLogo className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="font-bold text-lg font-serif tracking-wide leading-tight text-white">STT Walter Post</h3>
                  <p className="text-xs text-accent font-bold tracking-widest">JAYAPURA - PAPUA</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed text-justify">
                Mewujudkan pemimpin gereja yang berintegritas, Alkitabiah, dan berwawasan misi untuk melayani di Tanah Papua dan Indonesia.
              </p>
              
              {/* Visually Distinct Social Icons */}
              <div className="flex space-x-3 pt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                   className="bg-blue-600 text-white p-2.5 rounded-full hover:bg-blue-700 shadow-md transform hover:scale-110 transition-all duration-300" aria-label="Facebook">
                    <Facebook size={18} fill="currentColor" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                   className="bg-sky-500 text-white p-2.5 rounded-full hover:bg-sky-600 shadow-md transform hover:scale-110 transition-all duration-300" aria-label="Twitter">
                    <Twitter size={18} fill="currentColor" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                   className="bg-pink-600 text-white p-2.5 rounded-full hover:bg-pink-700 shadow-md transform hover:scale-110 transition-all duration-300" aria-label="Instagram">
                    <Instagram size={18} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                   className="bg-red-600 text-white p-2.5 rounded-full hover:bg-red-700 shadow-md transform hover:scale-110 transition-all duration-300" aria-label="YouTube">
                    <Youtube size={18} fill="currentColor" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif font-bold text-lg mb-6 border-b border-blue-700 dark:border-gray-800 pb-2 inline-block">Tautan Cepat</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><Link to="/profil/sejarah" className="hover:text-accent transition-colors flex items-center gap-2"><ChevronDown size={12} className="-rotate-90" /> Tentang Kami</Link></li>
                <li><Link to="/layanan/pmb" className="hover:text-accent transition-colors flex items-center gap-2"><ChevronDown size={12} className="-rotate-90" /> Pendaftaran (PMB)</Link></li>
                <li><Link to="/program-studi/s1-teologi" className="hover:text-accent transition-colors flex items-center gap-2"><ChevronDown size={12} className="-rotate-90" /> Akademik</Link></li>
                <li><Link to="/berita/terkini" className="hover:text-accent transition-colors flex items-center gap-2"><ChevronDown size={12} className="-rotate-90" /> Berita & Artikel</Link></li>
                <li><Link to="/alumni/tracer-study" className="hover:text-accent transition-colors flex items-center gap-2"><ChevronDown size={12} className="-rotate-90" /> Alumni Tracer Study</Link></li>
                <li><Link to="/kontak" className="hover:text-accent transition-colors flex items-center gap-2"><ChevronDown size={12} className="-rotate-90" /> Hubungi Kami</Link></li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-serif font-bold text-lg mb-6 border-b border-blue-700 dark:border-gray-800 pb-2 inline-block">Program Studi</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full"></div> S1 Teologi (S.Th)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full"></div> S1 Pendidikan Agama Kristen</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full"></div> S2 Magister Teologi</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full"></div> S2 Magister PAK</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif font-bold text-lg mb-6 border-b border-blue-700 dark:border-gray-800 pb-2 inline-block">Kantor Kampus</h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                   <MapPin className="text-accent shrink-0 mt-1" size={18} />
                   <span>Jln. Pos 7 Sentani, Jayapura<br/>Papua, Indonesia 99352</span>
                </li>
                <li className="flex items-center gap-3">
                   <Phone className="text-accent shrink-0" size={18} />
                   <span>+62 967 1234567</span>
                </li>
                <li className="flex items-center gap-3">
                   <Mail className="text-accent shrink-0" size={18} />
                   <span>kontak@sttwpj.ac.id</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 dark:border-gray-800 pt-8 mt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} STT Walter Post Jayapura. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
               <a href="#" className="hover:text-white">Privacy Policy</a>
               <a href="#" className="hover:text-white">Terms of Service</a>
               <Link to="/layanan/siakad" className="hover:text-white">Login Staf</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};