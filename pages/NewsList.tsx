
import React, { useState } from 'react';
import { Section, NewsCard } from '../components/UI';
import { Filter } from 'lucide-react';
import { newsData } from '../data/news';

export const NewsList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const categories = ["Semua", "Kampus", "Seminar", "Akademik", "Studi Banding"];

  const filteredNews = activeCategory === "Semua" 
    ? newsData.filter(n => ["Kampus", "Seminar", "Akademik", "Studi Banding"].includes(n.category)) // Simple filter for "News" type
    : newsData.filter(item => item.category === activeCategory);

  return (
    <>
      <div className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Berita Terkini</h1>
          <p className="text-xl text-blue-200">Kabar terbaru dari kampus STT Walter Post Jayapura</p>
        </div>
      </div>
      <Section>
        {/* Filter Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-gray-600 font-bold mr-2 mb-2 md:mb-0">
                <Filter size={20} /> Filter Kategori:
            </div>
            {/* Scrollable container for mobile responsiveness */}
            <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 md:flex-wrap md:justify-center w-full md:w-auto px-4 md:px-0 -mx-4 md:mx-0 scrollbar-hide">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex-shrink-0 ${
                            activeCategory === cat 
                            ? "bg-primary text-white shadow-md transform scale-105" 
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.length > 0 ? (
            filteredNews.map((item) => (
                <NewsCard 
                key={item.id}
                title={item.title}
                date={item.date}
                category={item.category}
                image={item.image}
                description={item.excerpt}
                link={`/berita/${item.id}`}
                />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500">
                <p className="text-lg">Tidak ada berita ditemukan untuk kategori ini.</p>
            </div>
          )}
        </div>
      </Section>
    </>
  );
};
