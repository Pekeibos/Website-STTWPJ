import React from 'react';
import { Section, NewsCard } from '../components/UI';

const articles = [
  {
    id: 1,
    title: "Relevansi Teologi Reformed di Abad 21",
    date: "10 Agustus 2024",
    category: "Teologi",
    image: "https://picsum.photos/seed/book/600/400",
    desc: "Sebuah tinjauan teologis mengenai pentingnya kembali kepada dasar-dasar iman Kristen di tengah gempuran postmodernisme."
  },
  {
    id: 2,
    title: "Pendidikan Kristen dalam Era Digital",
    date: "22 Juli 2024",
    category: "Pendidikan",
    image: "https://picsum.photos/seed/tech/600/400",
    desc: "Tantangan dan peluang bagi pendidik Kristen untuk memanfaatkan teknologi dalam pengajaran iman."
  },
];

export const Articles: React.FC = () => {
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
               description={item.desc}
               link="#"
             />
          ))}
        </div>
      </Section>
    </>
  );
};