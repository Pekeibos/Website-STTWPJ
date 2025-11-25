
import React from 'react';
import { Section, NewsCard } from '../components/UI';
import { newsData } from '../data/news';

export const Articles: React.FC = () => {
  const articles = newsData.filter(n => n.category.includes('Artikel') || n.category === 'Teologi' || n.category === 'Pendidikan');

  return (
    <>
      <div className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Artikel Rohani</h1>
          <p className="text-xl text-blue-200">Tulisan inspiratif dari dosen dan mahasiswa</p>
        </div>
      </div>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item) => (
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
      </Section>
    </>
  );
};
