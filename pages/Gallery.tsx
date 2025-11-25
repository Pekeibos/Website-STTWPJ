
import React, { useState } from 'react';
import { Section } from '../components/UI';
import { Play, Mic, Image as ImageIcon, Headphones, Eye, ArrowRight } from 'lucide-react';
import { galleryData } from '../data/gallery';
import { Link } from 'react-router-dom';

type MediaType = 'all' | 'image' | 'video' | 'audio';

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MediaType>('all');

  const filteredData = activeTab === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.type === activeTab);

  return (
    <>
      <div className="bg-primary text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Galeri Multimedia</h1>
          <p className="text-xl text-blue-200">Dokumentasi kegiatan, fasilitas, dan sumber daya rohani.</p>
        </div>
      </div>

      <Section>
        {/* Filters */}
        <div className="flex justify-center mb-12">
           <div className="bg-gray-100 p-1.5 rounded-full flex flex-wrap justify-center gap-1 shadow-inner">
              {[
                { id: 'all', label: 'Semua' },
                { id: 'image', label: 'Foto', icon: <ImageIcon size={16} /> },
                { id: 'video', label: 'Video', icon: <Play size={16} /> },
                { id: 'audio', label: 'Audio', icon: <Headphones size={16} /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as MediaType)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all duration-300 ${
                    activeTab === tab.id 
                    ? 'bg-primary text-white shadow-md transform scale-105' 
                    : 'text-gray-600 hover:bg-white hover:text-primary hover:shadow-sm'
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
           </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredData.map((item) => (
              <Link to={`/profil/galeri/${item.id}`} key={item.id} className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block relative">
                
                {/* Image Layout */}
                {item.type === 'image' && (
                  <>
                    <div className="relative overflow-hidden h-64">
                       <img src={item.url} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                       <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-gray-800 shadow-sm z-10">
                          {item.category}
                       </div>
                       <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full flex items-center gap-2 font-bold border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                             <Eye size={18} /> Lihat Detail
                          </span>
                       </div>
                    </div>
                    <div className="p-6">
                        <h3 className="font-bold text-lg text-gray-900 mb-2 font-serif group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{item.desc}</p>
                    </div>
                  </>
                )}

                {/* Video Layout */}
                {item.type === 'video' && (
                  <>
                    <div className="relative h-64 bg-black overflow-hidden">
                       <img src={item.thumbnail || item.url} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" />
                       <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded text-xs font-bold shadow-sm z-10">
                          VIDEO
                       </div>
                       <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full group-hover:scale-110 transition-transform duration-300 border border-white/30">
                                <div className="bg-red-600 text-white p-3 rounded-full shadow-lg">
                                   <Play size={24} fill="currentColor" />
                                </div>
                            </div>
                       </div>
                    </div>
                    <div className="p-6 relative">
                        <div className="text-xs font-bold text-gray-400 uppercase mb-1 tracking-wider">{item.category}</div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2 font-serif group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{item.desc}</p>
                        <div className="mt-4 flex items-center text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0">
                           Tonton Video <ArrowRight size={16} className="ml-1" />
                        </div>
                    </div>
                  </>
                )}

                 {/* Audio Layout */}
                {item.type === 'audio' && (
                  <div className="flex flex-col h-full relative bg-gradient-to-br from-white to-gray-50">
                      <div className="absolute top-0 left-0 w-full h-1.5 bg-accent group-hover:h-2 transition-all"></div>
                      <div className="p-6 pb-0">
                          <div className="flex justify-between items-start mb-4">
                             <div className="bg-accent/10 p-3 rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                <Mic size={28} />
                             </div>
                             <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-200 text-gray-600 px-2 py-1 rounded">
                                {item.category}
                             </span>
                          </div>
                          <h3 className="font-bold text-lg text-gray-900 font-serif leading-tight group-hover:text-primary transition-colors mb-2">{item.title}</h3>
                          <p className="text-sm text-gray-600 line-clamp-3 mb-6">{item.desc}</p>
                      </div>
                      
                      <div className="mt-auto p-6 pt-0">
                        <div className="bg-white p-3 rounded-lg border border-gray-200 group-hover:border-accent/30 group-hover:shadow-md transition-all flex items-center justify-between">
                           <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 group-hover:bg-accent group-hover:text-white transition-colors">
                                  <Play size={12} fill="currentColor" />
                              </div>
                              <span className="text-xs font-bold text-gray-500 group-hover:text-gray-800">Dengarkan</span>
                           </div>
                           <ArrowRight size={14} className="text-gray-300 group-hover:text-accent" />
                        </div>
                      </div>
                  </div>
                )}
              </Link>
            ))}
        </div>

        {filteredData.length === 0 && (
            <div className="text-center py-20 text-gray-500 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                <div className="mx-auto w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4 text-gray-400">
                    <ImageIcon size={32} />
                </div>
                <p className="font-medium">Tidak ada media ditemukan untuk kategori ini.</p>
                <button onClick={() => setActiveTab('all')} className="mt-4 text-primary font-bold hover:underline">
                    Lihat Semua Galeri
                </button>
            </div>
        )}
      </Section>
    </>
  );
};
