import React from 'react';
import { Section, SectionTitle, Button } from '../components/UI';
import { Search, BookOpen, ExternalLink, FileText } from 'lucide-react';

export const EJournal: React.FC = () => {
  return (
    <>
      <div className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">E-Jurnal</h1>
          <p className="text-xl text-blue-200">Portal Publikasi Ilmiah dan Jurnal Akademik</p>
        </div>
      </div>
      
      <Section>
        {/* Search Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Cari Artikel & Publikasi</h3>
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Masukkan judul, kata kunci, atau nama penulis..." 
                        className="w-full px-6 py-4 pr-16 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none text-gray-700" 
                    />
                    <button className="absolute right-2 top-2 bottom-2 bg-primary text-white px-6 rounded-md hover:bg-blue-800 transition-colors flex items-center">
                        <Search size={20} />
                    </button>
                </div>
            </div>
        </div>

        {/* Featured Journals */}
        <SectionTitle title="Terbitan Jurnal Kampus" subtitle="Jurnal ilmiah yang diterbitkan secara berkala oleh STT Walter Post Jayapura." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Jurnal 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all group flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 h-48 md:h-auto bg-gray-100 flex items-center justify-center relative overflow-hidden">
                    {/* Mock Cover */}
                    <div className="bg-blue-900 text-white w-32 h-40 shadow-lg flex flex-col items-center justify-center p-2 text-center transform group-hover:scale-105 transition-transform">
                        <span className="text-[0.6rem] uppercase tracking-widest mb-1">JURNAL TEOLOGI</span>
                        <span className="font-serif font-bold text-lg leading-tight">WALTER POST</span>
                        <div className="mt-4 w-8 h-8 border-2 border-white rounded-full"></div>
                    </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                        <div className="flex gap-2 mb-2">
                             <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-bold">ISSN: 1234-5678</span>
                             <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-bold">Vol. 10 No. 2</span>
                        </div>
                        <h3 className="text-2xl font-bold font-serif text-primary mb-2">Jurnal Teologi Walter Post</h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Fokus pada kajian teologi biblika, sistematika, dan kontekstual Papua. Terbit dua kali setahun (April & Oktober).
                        </p>
                    </div>
                    <div className="flex gap-3 mt-auto">
                        <Button variant="primary" className="text-sm py-2 px-4">Lihat Arsip</Button>
                        <Button variant="outline" className="text-sm py-2 px-4">Submit Artikel</Button>
                    </div>
                </div>
            </div>

            {/* Jurnal 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all group flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 h-48 md:h-auto bg-gray-100 flex items-center justify-center relative overflow-hidden">
                    {/* Mock Cover */}
                    <div className="bg-secondary text-white w-32 h-40 shadow-lg flex flex-col items-center justify-center p-2 text-center transform group-hover:scale-105 transition-transform">
                        <span className="text-[0.6rem] uppercase tracking-widest mb-1">JURNAL PAK</span>
                        <span className="font-serif font-bold text-lg leading-tight">DIDASKALIA</span>
                        <div className="mt-4 w-8 h-8 border-2 border-white rounded-full"></div>
                    </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                     <div>
                        <div className="flex gap-2 mb-2">
                             <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-bold">ISSN: 9876-5432</span>
                             <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-bold">Vol. 5 No. 1</span>
                        </div>
                        <h3 className="text-2xl font-bold font-serif text-secondary mb-2">Jurnal PAK Didaskalia</h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Mewadahi penelitian di bidang Pendidikan Agama Kristen, manajemen pendidikan, dan psikologi perkembangan.
                        </p>
                    </div>
                     <div className="flex gap-3 mt-auto">
                        <Button variant="secondary" className="text-sm py-2 px-4">Lihat Arsip</Button>
                        <Button variant="outline" className="text-sm py-2 px-4">Submit Artikel</Button>
                    </div>
                </div>
            </div>
        </div>

        {/* External Links */}
        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-center font-bold text-xl mb-8 font-serif">Terindeks Oleh</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Mock Logos using text for simplicity */}
                <div className="bg-white px-6 py-3 rounded shadow-sm font-bold text-2xl text-blue-900 tracking-tighter">
                   Google Scholar
                </div>
                <div className="bg-white px-6 py-3 rounded shadow-sm font-bold text-2xl text-gray-800">
                   GARUDA
                </div>
                <div className="bg-white px-6 py-3 rounded shadow-sm font-bold text-2xl text-blue-600">
                   SINTA
                </div>
                <div className="bg-white px-6 py-3 rounded shadow-sm font-bold text-2xl text-orange-600">
                   Crossref
                </div>
            </div>
            
            <div className="mt-8 text-center">
                 <p className="text-sm text-gray-500 mb-4">Butuh bantuan akses jurnal internasional?</p>
                 <Button variant="outline" to="/kontak">Hubungi Pustakawan</Button>
            </div>
        </div>

      </Section>
    </>
  );
};