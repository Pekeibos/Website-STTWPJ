import React from 'react';
import { Section, SectionTitle, Button, NewsCard } from '../components/UI';
import { BookOpen, Users, Globe, Award, ChevronRight, CheckCircle2, ChevronDown, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  { icon: <BookOpen className="w-8 h-8 text-accent" />, title: "Kurikulum Alkitabiah", desc: "Berlandaskan kebenaran Firman Tuhan yang mendalam." },
  { icon: <Users className="w-8 h-8 text-accent" />, title: "Dosen Berpengalaman", desc: "Dibimbing oleh praktisi dan akademisi teologi terbaik." },
  { icon: <Globe className="w-8 h-8 text-accent" />, title: "Berwawasan Misi", desc: "Siap melayani di pedalaman Papua hingga mancanegara." },
  { icon: <Award className="w-8 h-8 text-accent" />, title: "Terakreditasi", desc: "Diakui pemerintah dan lembaga akreditasi teologi." },
];

const testimonials = [
  {
    name: "Yusak Pakage",
    role: "Mahasiswa S1 Teologi",
    image: "https://picsum.photos/seed/student1/100/100",
    text: "Belajar di STT Walter Post bukan hanya mengasah intelektual, tetapi juga membentuk hati yang siap melayani. Dosen-dosennya sangat peduli dengan pertumbuhan rohani kami."
  },
  {
    name: "Pdt. Obeth Wenda, M.Th",
    role: "Alumni Angkatan 2015",
    image: "https://picsum.photos/seed/alumni1/100/100",
    text: "Ilmu teologi dan misi yang saya dapatkan sangat relevan dengan tantangan pelayanan di pedalaman Papua. STT WPJ benar-benar mempersiapkan kami untuk menjadi pemimpin yang berintegritas."
  },
  {
    name: "Maria Kogoya, S.Pd",
    role: "Guru Sekolah Kristen",
    image: "https://picsum.photos/seed/alumni2/100/100",
    text: "Program studi Pendidikan Agama Kristen di sini memiliki kurikulum yang komprehensif. Saya merasa sangat siap ketika terjun ke dunia pendidikan formal."
  }
];

export const Home: React.FC = () => {
  const scrollToContent = () => {
    const contentElement = document.getElementById('content-start');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pb-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Placeholder for Main Campus Image */}
          <img 
            src="https://picsum.photos/seed/campus1/1920/1080" 
            alt="Kampus STT Walter Post Jayapura" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10 pt-16 pb-12">
          <div className="max-w-4xl text-white">
            <span className="inline-block bg-accent/90 text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wider mb-6 animate-fade-in-up">
              MENERIMA MAHASISWA BARU 2026
            </span>
            <h1 className="text-3xl md:text-5xl font-bold font-serif leading-tight mb-6 drop-shadow-lg">
              Mewujudkan Pemimpin Gereja yang <span className="text-accent italic">Berintegritas</span> & Berwawasan Misi Kontekstual
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              Sekolah Tinggi Teologi Walter Post Jayapura hadir untuk memperlengkapi hamba Tuhan yang siap melayani di tanah Papua dan Indonesia dengan dasar Alkitab yang teguh dan pelayanan yang kontekstual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button to="/layanan/pmb" variant="secondary" className="shadow-xl">
                Daftar Sekarang
              </Button>
              <Button to="/profil/sejarah" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                Tentang Kampus
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-28 md:bottom-24 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer" onClick={scrollToContent}>
          <div className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
            <span className="text-xs font-bold tracking-widest mb-2">SCROLL</span>
            <ChevronDown size={32} />
          </div>
        </div>
      </section>

      {/* Quick Features Section */}
      <section id="content-start" className="py-12 bg-white relative -mt-20 z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-accent hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-4 bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2 font-serif">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fasilitas Kampus Section (Matching User's Images) */}
      <Section className="bg-gray-50" pattern>
        <SectionTitle 
          title="Fasilitas Kampus" 
          subtitle="Lingkungan belajar yang asri dan kondusif untuk pembentukan karakter." 
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
           {/* Gedung Kuliah Teologi (Resembling the tall cream building) */}
           <div className="relative group overflow-hidden rounded-xl shadow-xl h-96">
              <img 
                src="https://placehold.co/600x800/fef3c7/1e293b?text=Gedung+Kuliah+Teologi+(Cream+Building)" 
                alt="Gedung Kuliah Program Studi Teologi" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold font-serif mb-2">Gedung Kuliah Teologi</h3>
                <p className="text-gray-200 text-sm">Pusat kegiatan akademik program studi S1 & S2.</p>
              </div>
           </div>

           {/* Gedung Asrama/Kelas (Resembling the long 2-story building) */}
           <div className="flex flex-col gap-8 h-96">
             <div className="relative group overflow-hidden rounded-xl shadow-xl flex-grow">
                <img 
                  src="https://placehold.co/800x400/e2e8f0/1e293b?text=Gedung+Asrama+&+Kelas+(Long+Building)" 
                  alt="Asrama Mahasiswa" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold font-serif mb-1">Asrama & Ruang Kelas</h3>
                  <p className="text-gray-200 text-xs">Fasilitas tempat tinggal dan belajar yang nyaman.</p>
                </div>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-primary text-lg">Suasana Kampus Asri</h4>
                  <p className="text-sm text-gray-600">Dikelilingi alam hijau yang mendukung ketenangan studi.</p>
                </div>
                <Button to="/profil/sejarah" variant="outline" className="text-sm px-4 py-2">Lihat Profil</Button>
             </div>
           </div>
        </div>
      </Section>

      {/* Programs Section */}
      <Section className="bg-primary text-white">
        <SectionTitle 
          title="Program Studi" 
          subtitle="Pilihan program pendidikan untuk mempersiapkan masa depan pelayanan Anda."
          centered 
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            { 
              degree: 'S1', 
              name: 'Sarjana Teologi (S.Th)', 
              desc: 'Mempersiapkan calon pendeta dan pemimpin gereja dengan teologi sistematika yang kuat.' 
            },
            { 
              degree: 'S1', 
              name: 'Pendidikan Agama Kristen (S.Pd)', 
              desc: 'Mencetak guru agama Kristen yang profesional untuk sekolah dan gereja.' 
            },
            { 
              degree: 'S2', 
              name: 'Magister Teologi (M.Th)', 
              desc: 'Program pascasarjana untuk pendalaman teologi dan kepemimpinan Kristen.' 
            }
          ].map((prog, i) => (
            <div key={i} className="bg-blue-800/50 backdrop-blur-sm border border-blue-700 p-8 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 group">
              <div className="bg-accent w-12 h-12 flex items-center justify-center rounded-lg text-white font-bold text-xl mb-6 shadow-md">
                {prog.degree}
              </div>
              <h3 className="text-2xl font-bold mb-4 font-serif">{prog.name}</h3>
              <p className="text-blue-100 group-hover:text-gray-600 mb-6">{prog.desc}</p>
              <Link to="/program-studi/s1-teologi" className="inline-flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform">
                Lihat Kurikulum <ChevronRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* News Section */}
      <Section>
        <div className="flex justify-between items-end mb-12">
          <SectionTitle title="Berita & Kegiatan Kampus" />
          <Button to="/berita/terkini" variant="outline" className="hidden md:inline-flex">
            Lihat Semua Berita
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <NewsCard 
             title="Ibadah Pembukaan Semester Ganjil 2024"
             category="Kampus"
             date="12 Agustus 2024"
             description="Seluruh civitas akademika STT Walter Post mengikuti ibadah syukur mengawali tahun ajaran baru dengan penuh sukacita."
             image="https://picsum.photos/seed/worship/600/400"
             link="/berita/terkini"
           />
           <NewsCard 
             title="Seminar Misi: Injil di Tanah Papua"
             category="Seminar"
             date="05 September 2024"
             description="Menghadirkan pembicara internasional untuk membahas strategi pekabaran Injil di era modern."
             image="https://picsum.photos/seed/seminar/600/400"
             link="/berita/terkini"
           />
           <NewsCard 
             title="Penerimaan Mahasiswa Baru Gelombang II"
             category="Akademik"
             date="20 September 2024"
             description="Pendaftaran gelombang kedua telah dibuka. Segera daftarkan diri Anda sebelum kuota terpenuhi."
             image="https://picsum.photos/seed/students/600/400"
             link="/berita/terkini"
           />
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button to="/berita/terkini" variant="outline">Lihat Semua Berita</Button>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-gray-50 dark:bg-gray-900" pattern>
        <SectionTitle 
          title="Apa Kata Mereka?" 
          subtitle="Pengalaman mahasiswa dan alumni menjadi bagian dari keluarga besar STT Walter Post Jayapura."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testi, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 relative mt-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white shadow-md">
                   <Quote size={20} fill="currentColor" />
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-6 text-center pt-4">"{testi.text}"</p>
              <div className="flex items-center justify-center gap-4 border-t border-gray-100 dark:border-gray-700 pt-6">
                 <img src={testi.image} alt={testi.name} className="w-12 h-12 rounded-full object-cover border-2 border-primary dark:border-blue-500" />
                 <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm">{testi.name}</h4>
                    <p className="text-xs text-primary dark:text-blue-400 font-semibold">{testi.role}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA / Verse Section */}
      <section className="py-20 bg-cover bg-center bg-fixed relative" style={{ backgroundImage: 'url(https://picsum.photos/seed/mountain/1920/800)' }}>
        <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply"></div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <Globe className="w-16 h-16 mx-auto mb-6 text-accent opacity-80" />
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 italic">
            "Tetapi kamu akan menerima kuasa, kalau Roh Kudus turun ke atas kamu, dan kamu akan menjadi saksi-Ku..."
          </h2>
          <p className="text-xl mb-8 font-light tracking-widest">— KISAH PARA RASUL 1:8</p>
          <Button to="/kontak" variant="accent" className="text-lg px-8 py-4 shadow-xl">
            Hubungi Kami
          </Button>
        </div>
      </section>
    </>
  );
};