
import React, { useState } from 'react';
import { Section } from '../components/UI';
import { Play, Mic, Image as ImageIcon, Headphones, Eye } from 'lucide-react';
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
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Galeri Multimedia</h1>
          <p className="text-xl text-blue-200">Dokumentasi kegiatan, fasilitas, dan sumber daya rohani.</p>
        </div>
      </div>

      <Section>
        {/* Filters */}
        <div className="flex justify-center mb-12">
           <div className="bg-gray-100 p-1 rounded-full flex flex-wrap justify-center gap-1">
              {[
                { id: 'all', label: 'Semua' },
                { id: 'image', label: 'Foto', icon: <ImageIcon size={16} /> },
                { id: 'video', label: 'Video', icon: <Play size={16} /> },
                { id: 'audio', label: 'Audio', icon: <Headphones size={16} /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as MediaType)}
                  className={`px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all duration-300 ${
                    activeTab === tab.id 
                    ? 'bg-primary text-white shadow-md transform scale-105' 
                    : 'text-gray-600 hover:bg-gray-200 hover:text-primary'
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
              <Link to={`/profil/galeri/${item.id}`} key={item.id} className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block">
                
                {/* Image Layout */}
                {item.type === 'image' && (
                  <>
                    <div className="relative overflow-hidden h-64">
                       <img src={item.url} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                       <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-gray-800 shadow-sm">
                          {item.category}
                       </div>
                       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-white flex items-center gap-2 font-bold"><Eye size={20} /> Lihat Detail</span>
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
                       <img src={item.thumbnail || item.url} alt={item.title} className="w-full h-full object-cover opacity-80" />
                       <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-red-600 text-white p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                                <Play size={24} fill="currentColor" />
                            </div>
                       </div>
                    </div>
                    <div className="p-6 relative">
                        <div className="text-xs font-bold text-red-600 uppercase mb-1">{item.category}</div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2 font-serif group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{item.desc}</p>
                    </div>
                  </>
                )}

                 {/* Audio Layout */}
                {item.type === 'audio' && (
                  <div className="p-6 flex flex-col h-full relative">
                      <div className="absolute top-0 left-0 w-full h-2 bg-accent group-hover:h-3 transition-all"></div>
                      <div className="flex items-start gap-4 mb-6">
                          <div className="bg-gray-100 p-4 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                             <Mic size={32} />
                          </div>
                          <div>
                              <div className="text-xs font-bold text-accent uppercase mb-1">{item.category}</div>
                              <h3 className="font-bold text-lg text-gray-900 font-serif leading-tight group-hover:text-primary transition-colors">{item.title}</h3>
                          </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-6 flex-grow line-clamp-3">{item.desc}</p>
                      
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 mt-auto group-hover:bg-gray-100 transition-colors">
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                                <Play size={12} fill="currentColor" />
                            </div>
                            <span className="text-xs font-bold text-gray-600">Dengarkan Audio</span>
                         </div>
                      </div>
                  </div>
                )}
              </Link>
            ))}
        </div>

        {filteredData.length === 0 && (
            <div className="text-center py-20 text-gray-500">
                <p>Tidak ada media ditemukan untuk kategori ini.</p>
            </div>
        )}
      </Section>
    </>
  );
};
