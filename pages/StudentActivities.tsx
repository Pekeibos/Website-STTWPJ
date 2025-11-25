
import React from 'react';
import { Section, NewsCard } from '../components/UI';
import { galleryData } from '../data/gallery';

export const StudentActivities: React.FC = () => {
  // Filter activities from the centralized gallery data
  const activities = galleryData.filter(
    item => item.category === 'Kegiatan Mahasiswa' || item.category === 'Kegiatan'
  );

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
            {activities.length > 0 ? (
                activities.map((item) => (
                    <NewsCard 
                        key={item.id}
                        title={item.title}
                        date={item.date}
                        category={item.category}
                        image={item.type === 'video' ? (item.thumbnail || item.url) : item.url}
                        description={item.desc}
                        link={`/profil/galeri/${item.id}`}
                    />
                ))
            ) : (
                <div className="col-span-full text-center py-12 text-gray-500">
                    <p>Belum ada dokumentasi kegiatan mahasiswa yang ditampilkan.</p>
                </div>
            )}
         </div>
      </Section>
    </>
  );
};
