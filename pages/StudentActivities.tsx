import React from 'react';
import { Section, NewsCard } from '../components/UI';

const activities = [
  {
    id: 1,
    title: "KKN Mahasiswa di Wamena",
    date: "Juli 2024",
    category: "Pengabdian",
    image: "https://picsum.photos/seed/kkn/600/400",
    desc: "Mahasiswa tingkat akhir melaksanakan Kuliah Kerja Nyata dengan membangun fasilitas air bersih dan mengajar di sekolah minggu."
  },
  {
    id: 2,
    title: "Lomba Paduan Suara Antar Angkatan",
    date: "Agustus 2024",
    category: "Seni",
    image: "https://picsum.photos/seed/choir/600/400",
    desc: "Memeriahkan HUT RI dan HUT Kampus dengan puji-pujian yang harmonis."
  },
  {
    id: 3,
    title: "Seminar Kepemimpinan Mahasiswa",
    date: "September 2024",
    category: "Pelatihan",
    image: "https://picsum.photos/seed/leadership/600/400",
    desc: "Mempersiapkan pengurus BEM periode baru dengan materi manajemen organisasi dan kepemimpinan Kristen."
  },
  {
    id: 4,
    title: "Pertandingan Futsal Persahabatan",
    date: "Oktober 2024",
    category: "Olahraga",
    image: "https://picsum.photos/seed/futsal/600/400",
    desc: "Menjalin keakraban dengan STT GIDI melalui olahraga."
  }
];

export const StudentActivities: React.FC = () => {
  return (
    <>
      <div className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Kegiatan Mahasiswa</h1>
          <p className="text-xl text-blue-200">Dinamika kehidupan kampus yang penuh warna.</p>
        </div>
      </div>
      <Section>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((item) => (
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