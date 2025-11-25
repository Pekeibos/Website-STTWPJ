import React from 'react';
import { Section, NewsCard } from '../components/UI';

const infoItems = [
  {
    id: 1,
    title: "Kalender Akademik 2024/2025",
    date: "01 Juli 2024",
    category: "Pengumuman",
    image: "https://picsum.photos/seed/cal/600/400",
    desc: "Jadwal lengkap kegiatan akademik semester ganjil dan genap tahun ajaran 2024/2025."
  },
  {
    id: 2,
    title: "Jadwal Ujian Akhir Semester Ganjil",
    date: "15 November 2024",
    category: "Pengumuman",
    image: "https://picsum.photos/seed/exam/600/400",
    desc: "Informasi jadwal UAS bagi mahasiswa tingkat I - IV. Harap memperhatikan syarat administrasi."
  },
];

export const Information: React.FC = () => {
  return (
    <>
      <div className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Informasi Kampus</h1>
          <p className="text-xl text-blue-200">Pengumuman penting dan jadwal kegiatan.</p>
        </div>
      </div>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infoItems.map((item) => (
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