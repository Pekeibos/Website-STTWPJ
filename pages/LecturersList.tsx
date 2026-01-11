
import React, { useState } from 'react';
import { Section, Button } from '../components/UI';
import { Mail, Linkedin, Filter, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { lecturersData } from '../data/lecturers';

export const LecturersList: React.FC = () => {
  const [filterProdi, setFilterProdi] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const prodiList = ['Semua', 'S1 Teologi', 'S1 PAK', 'S2 Teologi', 'S2 Magister Teologi'];

  const filteredLecturers = lecturersData.filter(lecturer => {
    // Mapping for consistent filtering if data uses slightly different names
    const lecturerProdi = lecturer.prodi;
    
    // Logic to handle "S2 Magister Teologi" covering "S2 Teologi" or exact matches
    const matchesProdi = filterProdi === 'Semua' || 
                         lecturerProdi === filterProdi || 
                         (filterProdi === 'S2 Magister Teologi' && lecturerProdi === 'S2 Teologi');

    const matchesSearch = lecturer.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          lecturer.expertise.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesProdi && matchesSearch;
  });

  return (
    <>
      <div className="bg-primary dark:bg-gray-900 text-white py-20 text-center transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Dosen & Pengajar</h1>
          <p className="text-xl text-blue-200">Profil Tenaga Pendidik STT Walter Post Jayapura</p>
        </div>
      </div>
      
      <Section className="bg-white dark:bg-gray-950 transition-colors duration-300">
        {/* Controls: Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
           
           {/* Search */}
           <div className="relative w-full md:w-1/3">
              <input 
                type="text" 
                placeholder="Cari nama atau keahlian..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-colors"
              />
              <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
           </div>

           {/* Filter */}
           <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-bold whitespace-nowrap"><Filter size={18} /> Filter:</span>
              <div className="flex gap-2">
                {prodiList.map((prodi) => (
                  <button
                    key={prodi}
                    onClick={() => setFilterProdi(prodi)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                      filterProdi === prodi 
                        ? 'bg-primary text-white shadow-md' 
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {prodi}
                  </button>
                ))}
              </div>
           </div>
        </div>

        {/* Grid */}
        {filteredLecturers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredLecturers.map((lecturer) => (
                  <div key={lecturer.id} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100 dark:border-gray-800 flex flex-col h-full transform hover:-translate-y-2">
                    
                    {/* Image Container with Zoom Animation - Clickable */}
                    <Link to={`/dosen/${lecturer.id}`} className="relative overflow-hidden aspect-[4/5] bg-gray-200 dark:bg-gray-800 cursor-pointer block">
                        <img 
                          src={lecturer.image} 
                          alt={lecturer.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        />
                        
                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <div className="flex justify-center gap-4 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                <a 
                                  href={`mailto:${lecturer.email}`} 
                                  className="bg-white/20 hover:bg-white text-white hover:text-primary p-3 rounded-full backdrop-blur-sm transition-colors"
                                  title="Kirim Email"
                                  onClick={(e) => e.stopPropagation()} // Prevent card click
                                >
                                  <Mail size={20} />
                                </a>
                                <a 
                                  href={lecturer.linkedin} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="bg-white/20 hover:bg-white text-white hover:text-[#0077b5] p-3 rounded-full backdrop-blur-sm transition-colors"
                                  title="LinkedIn Profile"
                                  onClick={(e) => e.stopPropagation()} // Prevent card click
                                >
                                  <Linkedin size={20} />
                                </a>
                            </div>
                            <div className="w-full">
                                <span className="w-full bg-accent hover:bg-amber-600 text-white font-bold py-2 rounded-lg shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200 block text-center flex items-center justify-center gap-2">
                                  Lihat Profil <ArrowRight size={16} />
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Card Content - Clickable */}
                    <div className="p-6 text-center flex-grow flex flex-col justify-between relative z-10 bg-white dark:bg-gray-900">
                        <Link to={`/dosen/${lecturer.id}`} className="block h-full flex flex-col">
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1 font-serif leading-tight group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">{lecturer.name}</h3>
                          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">{lecturer.role}</p>
                          <div className="h-0.5 w-12 bg-gray-100 dark:bg-gray-800 mx-auto mb-3 group-hover:w-24 group-hover:bg-primary transition-all duration-500"></div>
                          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium line-clamp-2 mb-auto">{lecturer.expertise}</p>
                          <div className="mt-4 pt-4 border-t border-gray-50 dark:border-gray-800">
                             <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs rounded-full">{lecturer.prodi}</span>
                          </div>
                        </Link>
                    </div>
                  </div>
              ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 dark:bg-gray-900 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-800">
             <p className="text-gray-500 dark:text-gray-400 text-lg">Tidak ada dosen ditemukan dengan kriteria tersebut.</p>
             <Button variant="outline" onClick={() => {setFilterProdi('Semua'); setSearchQuery('');}} className="mt-4">Reset Filter</Button>
          </div>
        )}
      </Section>
    </>
  );
};
