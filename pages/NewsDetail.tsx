
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Section } from '../components/UI';
import { ChevronLeft, Calendar, User, Tag, Clock } from 'lucide-react';
import { newsData } from '../data/news';

export const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const news = newsData.find(n => n.id === Number(id));

  if (!news) {
    return <Navigate to="/berita/terkini" replace />;
  }

  // Calculate read time (rough estimate)
  const readTime = Math.ceil(news.content.length / 1000) + ' Menit Baca';

  return (
    <>
      <div className="relative h-[60vh] min-h-[400px]">
         <div className="absolute inset-0">
             <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
         </div>
         <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-12 z-10 text-white">
             <Link to="/berita/terkini" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
                <ChevronLeft size={20} /> Kembali ke Berita
             </Link>
             <div className="flex flex-wrap items-center gap-4 mb-4">
                 <span className="bg-accent px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                     {news.category}
                 </span>
                 <div className="flex items-center gap-2 text-sm font-medium">
                     <Calendar size={16} /> {news.date}
                 </div>
                 <div className="flex items-center gap-2 text-sm font-medium">
                     <Clock size={16} /> {readTime}
                 </div>
             </div>
             <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight max-w-4xl shadow-sm">
                 {news.title}
             </h1>
         </div>
      </div>

      <Section>
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
             {/* Main Content */}
             <div className="lg:col-span-8">
                 <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-100">
                     <div className="prose prose-lg prose-blue max-w-none text-gray-800 leading-relaxed font-serif" 
                          dangerouslySetInnerHTML={{ __html: news.content }}>
                     </div>
                     
                     {news.tags && (
                        <div className="mt-10 pt-8 border-t border-gray-100">
                            <h4 className="text-sm font-bold text-gray-500 uppercase mb-3 flex items-center gap-2"><Tag size={16}/> Tags</h4>
                            <div className="flex flex-wrap gap-2">
                                {news.tags.map((tag, idx) => (
                                    <span key={idx} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-default">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                     )}
                 </div>
             </div>

             {/* Sidebar */}
             <div className="lg:col-span-4 space-y-8">
                 {/* Author Card */}
                 <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
                     <h3 className="font-bold text-gray-900 mb-4 border-b pb-2">Penulis</h3>
                     <div className="flex items-center gap-4">
                         <div className="bg-gray-100 p-3 rounded-full text-gray-500">
                             <User size={24} />
                         </div>
                         <div>
                             <p className="font-bold text-primary">{news.author || "Admin Kampus"}</p>
                             <p className="text-xs text-gray-500">Editor Konten STT WPJ</p>
                         </div>
                     </div>
                 </div>

                 {/* Related News (Mockup Logic) */}
                 <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
                     <h3 className="font-bold text-gray-900 mb-4 border-b pb-2">Berita Terkait</h3>
                     <div className="space-y-4">
                         {newsData
                             .filter(n => n.id !== news.id && n.category === news.category)
                             .slice(0, 3)
                             .map(related => (
                                 <Link key={related.id} to={`/berita/${related.id}`} className="group flex gap-3">
                                     <img src={related.image} alt={related.title} className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
                                     <div>
                                         <h4 className="font-bold text-sm text-gray-800 group-hover:text-primary line-clamp-2 transition-colors">{related.title}</h4>
                                         <p className="text-xs text-gray-500 mt-1">{related.date}</p>
                                     </div>
                                 </Link>
                             ))}
                         {newsData.filter(n => n.id !== news.id && n.category === news.category).length === 0 && (
                             <p className="text-sm text-gray-500 italic">Tidak ada berita terkait lainnya.</p>
                         )}
                     </div>
                 </div>
             </div>
         </div>
      </Section>
    </>
  );
};
