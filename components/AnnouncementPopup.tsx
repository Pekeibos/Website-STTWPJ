import React, { useState, useEffect } from 'react';
import { X, Calendar, ArrowRight, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AnnouncementPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the popup has already been shown in this session
    const hasSeenPopup = sessionStorage.getItem('hasSeenAnnouncement');

    if (!hasSeenPopup) {
      // Small delay for smooth entrance after page load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Mark as seen in session storage
    sessionStorage.setItem('hasSeenAnnouncement', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300" 
        onClick={handleClose}
      ></div>

      {/* Modal Content */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden relative z-10 transform transition-all duration-500 scale-100 flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button 
          onClick={handleClose} 
          className="absolute top-4 right-4 z-20 bg-black/20 hover:bg-black/50 text-white md:text-gray-500 md:bg-gray-100 md:hover:bg-gray-200 p-2 rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        {/* Left Side: Image / Hero */}
        <div className="w-full md:w-5/12 relative h-48 md:h-auto">
          <img 
            src="https://picsum.photos/seed/students/600/800" 
            alt="Mahasiswa Baru" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-6 md:p-8">
            <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-2">
              INFO TERBARU
            </span>
            <h3 className="text-white text-2xl font-serif font-bold leading-tight">
              Penerimaan Mahasiswa Baru T.A 2024/2025
            </h3>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-7/12 p-6 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 font-serif text-primary dark:text-blue-400">
            Mari Bergabung Bersama Kami!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            STT Walter Post Jayapura membuka pendaftaran untuk Program Sarjana (S1) dan Pascasarjana (S2). Siapkan diri Anda menjadi pemimpin yang berintegritas.
          </p>

          {/* Key Dates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
             <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
                <div className="flex items-center gap-2 text-primary dark:text-blue-400 font-bold mb-1">
                   <UserPlus size={18} /> Gelombang II
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">s/d 20 Oktober 2024</p>
             </div>
             <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-100 dark:border-amber-800">
                <div className="flex items-center gap-2 text-accent font-bold mb-1">
                   <Calendar size={18} /> Kuliah Perdana
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">25 Oktober 2024</p>
             </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
             <Link 
               to="/layanan/pmb" 
               onClick={handleClose}
               className="bg-secondary hover:bg-red-800 text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
             >
                Daftar Sekarang <ArrowRight size={18} />
             </Link>
             <Link 
                to="/berita/terkini"
                onClick={handleClose}
                className="px-6 py-3 rounded-lg font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center transition-colors"
             >
                Lihat Jadwal Lengkap
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};