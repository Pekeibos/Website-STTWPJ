
import React from 'react';
import { Section, SectionTitle, NewsCard, Button } from '../components/UI';
import { Search } from 'lucide-react';
import { newsData } from '../data/news';
import { Link } from 'react-router-dom';

export const News: React.FC = () => {
  // Get latest news
  const featuredNews = newsData[0]; // Assume first is featured
  const latestNews = newsData.slice(1, 7); // Next 6 items

  return (
    <>
      <div className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary">Berita & Artikel</h1>
              <p className="text-gray-600 mt-2">Update terbaru kegiatan dan informasi seputar kampus.</p>
            </div>
            <div className="relative w-full md:w-auto">
               <input 
                 type="text" 
                 placeholder="Cari berita..." 
                 className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none w-full md:w-64"
               />
               <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>
        </div>
      </div>

      <Section>
        {/* Featured News */}
        <div className="mb-16">
          <Link to={`/berita/${featuredNews.id}`} className="block relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer h-[400px] md:h-[500px]">
             <img src={featuredNews.image} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                <span className="bg-accent text-white px-3 py-1 rounded text-sm font-bold w-fit mb-4">Headline</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white font-serif mb-4 leading-tight group-hover:text-blue-200 transition-colors">{featuredNews.title}</h2>
                <p className="text-gray-200 text-lg max-w-2xl mb-6 line-clamp-2">
                  {featuredNews.excerpt}
                </p>
                <Button variant="primary" className="w-fit pointer-events-none">Baca Selengkapnya</Button>
             </div>
          </Link>
        </div>

        {/* News Grid */}
        <SectionTitle title="Berita Terbaru" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestNews.map((item) => (
             <NewsCard 
               key={item.id}
               title={item.title}
               date={item.date}
               category={item.category}
               image={item.image}
               description={item.excerpt}
               link={`/berita/${item.id}`}
             />
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <Button to="/berita/terkini" variant="outline">Lihat Semua Berita</Button>
        </div>
      </Section>
    </>
  );
};
