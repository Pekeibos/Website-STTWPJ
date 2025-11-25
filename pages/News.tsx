import React from 'react';
import { Section, SectionTitle, NewsCard, Button } from '../components/UI';
import { Search } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: "Ibadah Pembukaan Semester Ganjil 2024",
    date: "12 Agustus 2024",
    category: "Kampus",
    image: "https://picsum.photos/seed/worship/600/400",
    desc: "Seluruh civitas akademika STT Walter Post mengikuti ibadah syukur mengawali tahun ajaran baru dengan penuh sukacita dan semangat baru."
  },
  {
    id: 2,
    title: "Seminar Misi: Injil di Tanah Papua",
    date: "05 September 2024",
    category: "Seminar",
    image: "https://picsum.photos/seed/seminar/600/400",
    desc: "Menghadirkan pembicara internasional untuk membahas strategi pekabaran Injil di era modern dan tantangan pelayanan di pedalaman."
  },
  {
    id: 3,
    title: "Penerimaan Mahasiswa Baru Gelombang II",
    date: "20 September 2024",
    category: "Akademik",
    image: "https://picsum.photos/seed/students/600/400",
    desc: "Pendaftaran gelombang kedua telah dibuka. Segera daftarkan diri Anda sebelum kuota terpenuhi. Beasiswa tersedia bagi yang berprestasi."
  },
  {
    id: 4,
    title: "Kunjungan Studi Banding ke STT Jakarta",
    date: "01 Oktober 2024",
    category: "Studi Banding",
    image: "https://picsum.photos/seed/visit/600/400",
    desc: "Delegasi mahasiswa dan dosen melakukan kunjungan akademik untuk memperluas wawasan dan jejaring kerjasama antar institusi teologi."
  },
  {
    id: 5,
    title: "Wisuda Sarjana Teologi Angkatan XX",
    date: "15 November 2024",
    category: "Wisuda",
    image: "https://picsum.photos/seed/grad/600/400",
    desc: "Selamat kepada 50 wisudawan yang telah menyelesaikan studi. Kiranya menjadi berkat bagi gereja dan masyarakat."
  },
  {
    id: 6,
    title: "Natal Bersama Civitas Akademika",
    date: "10 Desember 2024",
    category: "Perayaan",
    image: "https://picsum.photos/seed/xmas/600/400",
    desc: "Merayakan kelahiran Sang Juruselamat dengan penuh kasih dan kebersamaan di aula kampus utama."
  }
];

export const News: React.FC = () => {
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
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer h-[400px] md:h-[500px]">
             <img src="https://picsum.photos/seed/featured/1200/600" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                <span className="bg-accent text-white px-3 py-1 rounded text-sm font-bold w-fit mb-4">Headline</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white font-serif mb-4 leading-tight">Peresmian Gedung Perpustakaan Baru Berbasis Digital</h2>
                <p className="text-gray-200 text-lg max-w-2xl mb-6 line-clamp-2">
                  STT Walter Post Jayapura terus berinovasi dengan menghadirkan fasilitas perpustakaan modern yang terintegrasi dengan jurnal teologi internasional.
                </p>
                <Button variant="primary" className="w-fit">Baca Selengkapnya</Button>
             </div>
          </div>
        </div>

        {/* News Grid */}
        <SectionTitle title="Berita Terbaru" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
             <NewsCard 
               key={item.id}
               title={item.title}
               date={item.date}
               category={item.category}
               image={item.image}
               description={item.desc}
               link={`/berita/${item.id}`}
             />
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <Button variant="outline">Muat Lebih Banyak</Button>
        </div>
      </Section>
    </>
  );
};