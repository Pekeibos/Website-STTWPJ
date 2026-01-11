
import React, { useState } from 'react';
import { Section, Button } from '../components/UI';
import { Mail, Linkedin, Filter, Search, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { lecturersData } from '../data/lecturers';

export const LecturersList: React.FC = () => {
  const [filterProdi, setFilterProdi] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // The categories requested by user, mapped to data values
  const filterCategories = [
    { label: 'All', value: 'All' },
    { label: 'S1 Teologi', value: 'S1 Teologi' },
    { label: 'S1 PAK', value: 'S1 PAK' },
    { label: 'S2 Teologi', value: 'S2 Teologi' },
    { label: 'S2 Magister Teologi', value: 'S2 Teologi' } // Mapping S2 Magister to S2 Teologi data
  ];

  const filteredLecturers = lecturersData.filter(lecturer => {
    // Exact match or handling the "All" case
    const matchesProdi = filterProdi === 'All' || lecturer.prodi === filterProdi;
    
    // Search by name or expertise
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
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
           
           {/* Search */}
           <div className="relative w-full lg:w-1/3">
              <input 
                type="text" 
                placeholder="Cari nama dosen atau keahlian..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-colors"
              />
              <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
           </div>

           {/* Filter Buttons */}
           <div className="flex items-center gap-3 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
              <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-bold whitespace-nowrap"><Filter size={18} /> Filter Prodi:</span>
              <div className="flex gap-2">
                {filterCategories.map((category, idx) => (
                  <button
                    key={idx}
                    onClick={() => setFilterProdi(category.value)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                      filterProdi === category.value 
                        ? 'bg-primary text-white shadow-md transform scale-105' 
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
           </div>
        </div>

        {/* Grid */}
        {filteredLecturers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredLecturers.map((lecturer) => (
                  <div key={lecturer.id} className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-100 dark:border-gray-800 flex flex-col h-full transform hover:-translate-y-2 cursor-pointer relative">
                    
                    {/* Link wrapping the whole card */}
                    <Link to={`/dosen/${lecturer.id}`} className="absolute inset-0 z-0"></Link>

                    {/* Image Container with Zoom Animation */}
                    <div className="relative overflow-hidden aspect-[4/5] bg-gray-200 dark:bg-gray-800">
                        <img 
                          src={lecturer.image} 
                          alt={lecturer.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        />
                        
                        {/* Overlay Gradient on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 z-10 pointer-events-none">
                            <div className="flex justify-center gap-4 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 pointer-events-auto">
                                <a 
                                  href={`mailto:${lecturer.email}`} 
                                  className="bg-white/20 hover:bg-white text-white hover:text-primary p-3 rounded-full backdrop-blur-sm transition-colors"
                                  title="Kirim Email"
                                >
                                  <Mail size={20} />
                                </a>
                                <a 
                                  href={lecturer.linkedin} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="bg-white/20 hover:bg-white text-white hover:text-[#0077b5] p-3 rounded-full backdrop-blur-sm transition-colors"
                                  title="LinkedIn Profile"
                                >
                                  <Linkedin size={20} />
                                </a>
                            </div>
                            <div className="w-full pointer-events-none">
                                <span className="w-full bg-accent text-white font-bold py-2 rounded-lg shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200 block text-center flex items-center justify-center gap-2">
                                  Lihat Profil Lengkap <ArrowRight size={16} />
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 text-center flex-grow flex flex-col relative z-10 bg-white dark:bg-gray-900 pointer-events-none">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1 font-serif leading-tight group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">{lecturer.name}</h3>
                        <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">{lecturer.role}</p>
                        <div className="h-0.5 w-12 bg-gray-100 dark:bg-gray-800 mx-auto mb-3 group-hover:w-24 group-hover:bg-primary transition-all duration-500"></div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium line-clamp-2 mb-4">{lecturer.expertise}</p>
                        
                        <div className="mt-auto pt-4 border-t border-gray-50 dark:border-gray-800 flex justify-center">
                             <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs rounded-full font-medium">
                                <BookOpen size={12} /> {lecturer.prodi}
                             </span>
                        </div>
                    </div>
                  </div>
              ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 dark:bg-gray-900 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-800">
             <div className="mx-auto w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 text-gray-400">
                <Search size={32} />
             </div>
             <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">Tidak ada dosen ditemukan untuk filter ini.</p>
             <Button variant="outline" onClick={() => {setFilterProdi('All'); setSearchQuery('');}} className="mt-4">Reset Pencarian</Button>
          </div>
        )}
      </Section>
    </>
  );
};
