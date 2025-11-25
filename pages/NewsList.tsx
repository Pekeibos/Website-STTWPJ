import React, { useState } from 'react';
import { Section, SectionTitle, NewsCard } from '../components/UI';
import { Filter } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: "Ibadah Pembukaan Semester Ganjil 2024",
    date: "12 Agustus 2024",
    category: "Kampus",
    image: "https://picsum.photos/seed/worship/600/400",
    desc: "Seluruh civitas akademika STT Walter Post mengikuti ibadah syukur mengawali tahun ajaran baru dengan penuh sukacita."
  },
  {
    id: 2,
    title: "Seminar Misi: Injil di Tanah Papua",
    date: "05 September 2024",
    category: "Seminar",
    image: "https://picsum.photos/seed/seminar/600/400",
    desc: "Menghadirkan pembicara internasional untuk membahas strategi pekabaran Injil di era modern."
  },
   {
    id: 3,
    title: "Kunjungan Studi Banding ke STT Jakarta",
    date: "01 Oktober 2024",
    category: "Studi Banding",
    image: "https://picsum.photos/seed/visit/600/400",
    desc: "Delegasi mahasiswa dan dosen melakukan kunjungan akademik untuk memperluas wawasan."
  },
  {
    id: 4,
    title: "Kuliah Umum: Teologi Kontekstual",
    date: "15 Oktober 2024",
    category: "Akademik",
    image: "https://picsum.photos/seed/lecture/600/400",
    desc: "Membahas pentingnya teologi yang membumi tanpa kehilangan esensi Alkitabiah."
  },
  {
    id: 5,
    title: "Retreat Mahasiswa Tingkat Akhir",
    date: "20 Oktober 2024",
    category: "Kampus",
    image: "https://picsum.photos/seed/retreat/600/400",
    desc: "Persiapan spiritual bagi calon wisudawan sebelum terjun ke ladang pelayanan."
  }
];

export const NewsList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const categories = ["Semua", "Kampus", "Seminar", "Akademik", "Studi Banding"];

  const filteredNews = activeCategory === "Semua" 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

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
            <div className="flex items-center gap-2 text-gray-600 font-bold mr-2">
                <Filter size={20} /> Filter Kategori:
            </div>
            <div className="flex flex-wrap justify-center gap-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
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
                description={item.desc}
                link="#"
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