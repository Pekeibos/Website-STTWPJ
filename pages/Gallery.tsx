import React, { useState } from 'react';
import { Section, SectionTitle } from '../components/UI';
import { Play, Mic, Image as ImageIcon, Headphones } from 'lucide-react';

type MediaType = 'all' | 'image' | 'video' | 'audio';

interface GalleryItem {
  id: number;
  type: 'image' | 'video' | 'audio';
  category: string;
  title: string;
  url: string; // URL for image src, video embed, or audio file
  desc?: string;
}

const galleryData: GalleryItem[] = [
  // Images - Sarana & Prasarana
  { id: 1, type: 'image', category: 'Sarana & Prasarana', title: 'Gedung Rektorat Utama', url: 'https://picsum.photos/id/1018/800/600', desc: 'Pusat administrasi kampus STT WPJ.' },
  { id: 2, type: 'image', category: 'Sarana & Prasarana', title: 'Perpustakaan Kampus', url: 'https://picsum.photos/id/1073/800/600', desc: 'Fasilitas perpustakaan lengkap dengan ruang baca digital.' },
  { id: 3, type: 'image', category: 'Sarana & Prasarana', title: 'Kapel Kampus', url: 'https://picsum.photos/id/1029/800/600', desc: 'Tempat ibadah rutin civitas akademika.' },
  { id: 4, type: 'image', category: 'Sarana & Prasarana', title: 'Asrama Putra', url: 'https://picsum.photos/id/1040/800/600', desc: 'Fasilitas tempat tinggal mahasiswa yang nyaman.' },
  
  // Images - Kegiatan
  { id: 5, type: 'image', category: 'Kegiatan Kampus', title: 'Wisuda Angkatan XX', url: 'https://picsum.photos/id/1059/800/600', desc: 'Momen kebahagiaan para wisudawan dan orang tua.' },
  { id: 6, type: 'image', category: 'Kegiatan Kampus', title: 'KKN di Wamena', url: 'https://picsum.photos/id/1015/800/600', desc: 'Mahasiswa melayani masyarakat di daerah pedalaman.' },
  { id: 7, type: 'image', category: 'Kegiatan Kampus', title: 'Natal Bersama', url: 'https://picsum.photos/id/1060/800/600', desc: 'Perayaan Natal keluarga besar STT Walter Post.' },

  // Videos
  { id: 8, type: 'video', category: 'Video Profil', title: 'Profil Kampus STT Walter Post', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=SimulatedVideoID', desc: 'Mengenal lebih dekat visi dan misi kampus.' },
  { id: 9, type: 'video', category: 'Kegiatan', title: 'Dokumentasi Retreat Mahasiswa', url: 'https://www.youtube.com/embed/lxRwEPvL-mQ?si=SimulatedVideoID2', desc: 'Keseruan dan pertumbuhan rohani selama retreat.' },
  
  // Audio
  { id: 10, type: 'audio', category: 'Khotbah', title: 'Pentingnya Integritas Pelayan Tuhan', url: '#', desc: 'Pdt. Dr. Yance Kogoya, M.Th - Ibadah Senin' },
  { id: 11, type: 'audio', category: 'Renungan', title: 'Misi di Era Digital', url: '#', desc: 'Dr. Sarah Wenda - Renungan Pagi' },
  { id: 12, type: 'audio', category: 'Podcast', title: 'Podcast Mahasiswa: Teologi & Budaya', url: '#', desc: 'Diskusi BEM STT WPJ Episode 1' },
];

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
              <div key={item.id} className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                
                {/* Image Layout */}
                {item.type === 'image' && (
                  <>
                    <div className="relative overflow-hidden h-64">
                       <img src={item.url} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                       <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-gray-800 shadow-sm">
                          {item.category}
                       </div>
                    </div>
                    <div className="p-6">
                        <h3 className="font-bold text-lg text-gray-900 mb-2 font-serif">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </>
                )}

                {/* Video Layout */}
                {item.type === 'video' && (
                  <>
                    <div className="relative h-64 bg-black">
                       <iframe 
                         width="100%" 
                         height="100%" 
                         src={item.url} 
                         title={item.title} 
                         frameBorder="0" 
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                         allowFullScreen
                         className="w-full h-full"
                       ></iframe>
                    </div>
                    <div className="p-6 relative">
                         <div className="absolute -top-6 right-6 bg-red-600 text-white p-3 rounded-full shadow-lg">
                            <Play size={20} fill="currentColor" />
                         </div>
                        <div className="text-xs font-bold text-red-600 uppercase mb-1">{item.category}</div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2 font-serif">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </>
                )}

                 {/* Audio Layout */}
                {item.type === 'audio' && (
                  <div className="p-6 flex flex-col h-full relative">
                      <div className="absolute top-0 left-0 w-full h-2 bg-accent"></div>
                      <div className="flex items-start gap-4 mb-6">
                          <div className="bg-gray-100 p-4 rounded-xl text-primary">
                             <Mic size={32} />
                          </div>
                          <div>
                              <div className="text-xs font-bold text-accent uppercase mb-1">{item.category}</div>
                              <h3 className="font-bold text-lg text-gray-900 font-serif leading-tight">{item.title}</h3>
                          </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-6 flex-grow">{item.desc}</p>
                      
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 mt-auto">
                         <div className="flex items-center gap-3">
                            <button className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0 hover:bg-blue-800 transition-colors">
                                <Play size={12} fill="currentColor" />
                            </button>
                            <div className="h-1 bg-gray-300 w-full rounded-full overflow-hidden">
                                <div className="h-full bg-accent w-1/3"></div>
                            </div>
                            <span className="text-xs font-mono text-gray-500">14:20</span>
                         </div>
                      </div>
                  </div>
                )}
              </div>
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