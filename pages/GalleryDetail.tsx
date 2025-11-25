
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Section, Button } from '../components/UI';
import { ChevronLeft, Calendar, Tag, Play, Music, Image as ImageIcon } from 'lucide-react';
import { galleryData } from '../data/gallery';

export const GalleryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = galleryData.find(g => g.id === Number(id));

  if (!item) {
    return <Navigate to="/profil/galeri" replace />;
  }

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
          <div className="bg-gray-100 p-8 rounded-xl border border-gray-200 flex flex-col items-center justify-center space-y-6">
            <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center text-white shadow-lg animate-pulse">
               <Music size={48} />
            </div>
            <audio controls className="w-full max-w-2xl">
              <source src={item.url} type="audio/mpeg" />
              Browser Anda tidak mendukung elemen audio.
            </audio>
            <p className="text-sm text-gray-500">Klik play untuk mendengarkan</p>
          </div>
        );
      case 'image':
      default:
        return (
          <div className="w-full rounded-xl overflow-hidden shadow-2xl">
            <img src={item.url} alt={item.title} className="w-full h-auto object-cover" />
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
      <div className="bg-gray-900 text-white py-12">
         <div className="container mx-auto px-4">
             <Link to="/profil/galeri" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
                <ChevronLeft size={20} /> Kembali ke Galeri
             </Link>
             <div className="flex items-center gap-3 mb-4">
                <span className="bg-accent px-3 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-2">
                    {getIcon()} {item.type}
                </span>
                <span className="bg-gray-700 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2">
                    <Tag size={14} /> {item.category}
                </span>
             </div>
             <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">{item.title}</h1>
             {item.date && (
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar size={16} /> {item.date}
                </div>
             )}
         </div>
      </div>

      <Section>
        <div className="max-w-5xl mx-auto">
            <div className="mb-10">
                {renderMedia()}
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold font-serif mb-4 text-primary">Deskripsi Lengkap</h3>
                <div className="prose prose-lg text-gray-700 leading-relaxed max-w-none">
                    <p className="font-semibold text-lg mb-4">{item.desc}</p>
                    <p>{item.fullContent || item.desc}</p>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4">Bagikan:</h4>
                    <div className="flex gap-2">
                        <Button variant="outline" className="text-sm py-2 px-4" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}>Facebook</Button>
                        <Button variant="outline" className="text-sm py-2 px-4" onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=${item.title}`, '_blank')}>Twitter</Button>
                        <Button variant="outline" className="text-sm py-2 px-4" onClick={() => window.open(`https://wa.me/?text=${item.title} ${window.location.href}`, '_blank')}>WhatsApp</Button>
                    </div>
                </div>
            </div>
        </div>
      </Section>
    </>
  );
};
