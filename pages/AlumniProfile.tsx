
import React from 'react';
import { Section, SectionTitle, NewsCard } from '../components/UI';
import { Map, Users, Briefcase } from 'lucide-react';
import { galleryData } from '../data/gallery';

export const AlumniProfile: React.FC = () => {
  // Filter alumni gallery items
  const alumniGallery = galleryData.filter(item => item.category === 'Alumni');

  return (
    <>
      <div className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Profil Alumni</h1>
          <p className="text-xl text-blue-200">Jejak Langkah Lulusan STT Walter Post Jayapura.</p>
        </div>
      </div>
      
      <Section>
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow text-center border-b-4 border-primary">
                <Users size={40} className="mx-auto text-primary mb-4" />
                <h3 className="text-4xl font-bold text-gray-900 mb-2">2.500+</h3>
                <p className="text-gray-500">Total Alumni</p>
            </div>
             <div className="bg-white p-8 rounded-xl shadow text-center border-b-4 border-accent">
                <Map size={40} className="mx-auto text-accent mb-4" />
                <h3 className="text-4xl font-bold text-gray-900 mb-2">28</h3>
                <p className="text-gray-500">Provinsi Sebaran Pelayanan</p>
            </div>
             <div className="bg-white p-8 rounded-xl shadow text-center border-b-4 border-secondary">
                <Briefcase size={40} className="mx-auto text-secondary mb-4" />
                <h3 className="text-4xl font-bold text-gray-900 mb-2">95%</h3>
                <p className="text-gray-500">Terserap dalam Pelayanan <br/> <span className="text-xs">(&lt; 6 Bulan setelah lulus)</span></p>
            </div>
        </div>

        {/* Kiprah Alumni - Testimonials */}
        <SectionTitle title="Kiprah Alumni" subtitle="Alumni kami melayani di berbagai bidang strategis." centered />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mb-20">
            <div className="bg-gray-50 p-6 rounded-xl flex gap-4 items-start border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <img src="https://picsum.photos/seed/alumnus1/100/100" className="w-20 h-20 rounded-full object-cover border-2 border-white shadow" alt="Alumni" />
                <div>
                    <h4 className="font-bold text-lg">Pdt. Yan Wenda, M.Th</h4>
                    <p className="text-primary text-sm font-bold mb-2">Ketua Sinode Gereja X</p>
                    <p className="text-sm text-gray-600 italic">"Pendidikan di STT WPJ membentuk karakter kepemimpinan yang saya butuhkan untuk memimpin ribuan jemaat hari ini."</p>
                </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl flex gap-4 items-start border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <img src="https://picsum.photos/seed/alumnus2/100/100" className="w-20 h-20 rounded-full object-cover border-2 border-white shadow" alt="Alumni" />
                <div>
                    <h4 className="font-bold text-lg">Maria Tabuni, S.Pd</h4>
                    <p className="text-primary text-sm font-bold mb-2">Kepala Sekolah SD YPPK</p>
                    <p className="text-sm text-gray-600 italic">"Ilmu PAK yang saya dapatkan sangat aplikatif dalam mengembangkan kurikulum berkarakter Kristen di sekolah."</p>
                </div>
            </div>
        </div>

        {/* Galeri Alumni Section */}
        {alumniGallery.length > 0 && (
          <div className="border-t border-gray-200 pt-16">
            <SectionTitle title="Galeri & Dokumentasi Alumni" subtitle="Momen kebersamaan dan kegiatan Ikatan Alumni STT WPJ." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {alumniGallery.map((item) => (
                    <NewsCard 
                        key={item.id}
                        title={item.title}
                        date={item.date}
                        category={item.category}
                        image={item.url}
                        description={item.desc}
                        link={`/profil/galeri/${item.id}`}
                    />
                ))}
            </div>
          </div>
        )}
      </Section>
    </>
  );
};
