
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Section, Button } from '../components/UI';
import { ChevronLeft, Calendar, Tag, Play, Music, Image as ImageIcon, Eye } from 'lucide-react';
import { galleryData } from '../data/gallery';

export const GalleryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = galleryData.find(g => g.id === Number(id));

  if (!item) {
    return <Navigate to="/profil/galeri" replace />;
  }

  // Get related items (same type, excluding current)
  const relatedItems = galleryData
    .filter(g => g.type === item.type && g.id !== item.id)
    .slice(0, 3);

  const renderMedia = () => {
    switch (item.type) {
      case 'video':
        return (
          <div className="aspect-video w-full bg-black rounded-xl overflow-hidden shadow-2xl">
            <iframe 
              width="100%" 
              height="100%" 
              src={item.url} 
              title={item.title} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        );
      case 'audio':
        return (
          <div className="bg-gray-900 p-12 rounded-xl border border-gray-800 flex flex-col items-center justify-center space-y-8 text-center bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
            <div className="relative">
                <div className="w-40 h-40 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl animate-pulse">
                   <Music size={64} />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-accent text-white p-2 rounded-full border-4 border-gray-900">
                    <Play size={20} fill="currentColor" />
                </div>
            </div>
            <div>
                 <h2 className="text-2xl text-white font-serif font-bold mb-2">{item.title}</h2>
                 <p className="text-gray-400">{item.category}</p>
            </div>
            <audio controls className="w-full max-w-2xl custom-audio">
              <source src={item.url} type="audio/mpeg" />
              Browser Anda tidak mendukung elemen audio.
            </audio>
          </div>
        );
      case 'image':
      default:
        return (
          <div className="w-full rounded-xl overflow-hidden shadow-2xl relative group">
            <img src={item.url} alt={item.title} className="w-full h-auto object-cover" />
             <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <Eye size={16} /> Tampilan Penuh
             </div>
          </div>
        );
    }
  };

  const getIcon = () => {
      if (item.type === 'video') return <Play size={20} />;
      if (item.type === 'audio') return <Music size={20} />;
      return <ImageIcon size={20} />;
  };

  return (
    <>
      <div className="bg-gray-900 text-white py-12 border-b border-gray-800">
         <div className="container mx-auto px-4">
             <Link to="/profil/galeri" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors font-medium">
                <ChevronLeft size={20} /> Kembali ke Galeri
             </Link>
             <div className="flex items-center gap-3 mb-4">
                <span className="bg-accent px-3 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-2 shadow-sm text-white">
                    {getIcon()} {item.type}
                </span>
                <span className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2 text-gray-300">
                    <Tag size={14} /> {item.category}
                </span>
             </div>
             <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 leading-tight">{item.title}</h1>
             {item.date && (
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar size={16} /> <span className="uppercase tracking-widest text-xs font-bold">{item.date}</span>
                </div>
             )}
         </div>
      </div>

      <Section>
        <div className="max-w-5xl mx-auto">
            <div className="mb-10">
                {renderMedia()}
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold font-serif mb-6 text-primary border-b border-gray-100 pb-4">Deskripsi Lengkap</h3>
                <div className="prose prose-lg text-gray-700 leading-relaxed max-w-none">
                    <p className="font-medium text-xl text-gray-900 mb-6 font-serif italic">"{item.desc}"</p>
                    <p className="text-gray-600">{item.fullContent || item.desc}</p>
                </div>
                
                <div className="mt-10 pt-8 border-t border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Bagikan Konten Ini:</h4>
                    <div className="flex gap-2">
                        <Button variant="outline" className="text-sm py-2 px-4 hover:bg-blue-600 hover:text-white hover:border-blue-600" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}>Facebook</Button>
                        <Button variant="outline" className="text-sm py-2 px-4 hover:bg-sky-500 hover:text-white hover:border-sky-500" onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=${item.title}`, '_blank')}>Twitter</Button>
                        <Button variant="outline" className="text-sm py-2 px-4 hover:bg-green-500 hover:text-white hover:border-green-500" onClick={() => window.open(`https://wa.me/?text=${item.title} ${window.location.href}`, '_blank')}>WhatsApp</Button>
                    </div>
                </div>
            </div>

            {/* Related Media Section */}
            {relatedItems.length > 0 && (
              <div className="mt-16">
                <div className="flex items-center justify-between mb-8">
                   <h3 className="text-2xl font-bold font-serif text-gray-900">Media Terkait Lainnya</h3>
                   <Link to="/profil/galeri" className="text-primary font-bold hover:underline text-sm">Lihat Semua</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedItems.map(related => (
                    <Link to={`/profil/galeri/${related.id}`} key={related.id} className="group block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                       <div className="h-48 overflow-hidden relative">
                          <img src={related.thumbnail || related.url} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                          <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-xs font-bold">
                             {related.type === 'video' ? <Play size={12} fill="currentColor"/> : (related.type === 'audio' ? <Music size={12}/> : <ImageIcon size={12}/>)}
                          </div>
                          <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-xs font-bold text-gray-800 shadow-sm">
                             {related.category}
                          </div>
                       </div>
                       <div className="p-4">
                          <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 font-serif">{related.title}</h4>
                          <p className="text-xs text-gray-500 mt-2">{related.date}</p>
                       </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
        </div>
      </Section>
    </>
  );
};
