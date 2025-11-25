import React from 'react';
import { Section, SectionTitle, Button } from '../components/UI';
import { Book, GraduationCap, School, Layers, CheckCircle } from 'lucide-react';

const ProgramCard: React.FC<{
  title: string;
  degree: string;
  desc: string;
  icon: React.ReactNode;
  features: string[];
  colorClass: string;
  iconBgClass: string;
}> = ({ title, degree, desc, icon, features, colorClass, iconBgClass }) => (
  <div className={`bg-white p-8 rounded-2xl shadow-lg border-t-4 ${colorClass} flex flex-col h-full hover:shadow-xl transition-shadow`}>
    <div className={`${iconBgClass} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
      {icon}
    </div>
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-2xl font-bold font-serif text-gray-900">{title}</h3>
      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{degree}</span>
    </div>
    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
      {desc}
    </p>
    <div className="space-y-3 mb-8">
      {features.map((feat, i) => (
        <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
          <CheckCircle size={16} className="mt-0.5 text-green-500 flex-shrink-0" />
          <span>{feat}</span>
        </div>
      ))}
    </div>
    <Button to="/pmb" variant="outline" className="w-full mt-auto">Daftar Program Ini</Button>
  </div>
);

export const Academics: React.FC = () => {
  return (
    <>
      <div className="bg-primary text-white py-20 text-center relative">
        <div className="absolute inset-0 bg-blue-900/50 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Program Studi</h1>
          <p className="text-xl text-blue-200">Pilihan pendidikan teologi berkualitas untuk masa depan pelayanan Anda.</p>
        </div>
      </div>

      <Section>
        <SectionTitle title="Program Sarjana (S1)" subtitle="Membangun dasar teologi yang kuat bagi pelayanan masa kini." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <ProgramCard 
            title="Teologi (S.Th)"
            degree="Sarjana"
            colorClass="border-primary"
            iconBgClass="bg-blue-50 text-primary"
            icon={<Book size={32} />}
            desc="Program Sarjana Teologi dirancang untuk mempersiapkan mahasiswa menjadi hamba Tuhan, pendeta, dan pemimpin gereja yang memiliki pemahaman Alkitab yang mendalam."
            features={[
              "Eksegese Perjanjian Lama & Baru",
              "Teologi Sistematika & Biblika",
              "Homiletika & Liturgika",
              "Praktek Pelayanan Gerejawi"
            ]}
          />
          <ProgramCard 
            title="Pendidikan Agama Kristen (S.Pd)"
            degree="Sarjana"
            colorClass="border-accent"
            iconBgClass="bg-amber-50 text-accent"
            icon={<School size={32} />}
            desc="Mempersiapkan tenaga pendidik profesional di bidang Agama Kristen untuk melayani di sekolah formal (SD-SMA) maupun pelayanan kategorial gereja."
            features={[
              "Pedagogi & Psikologi Pendidikan",
              "Kurikulum & Strategi Pembelajaran PAK",
              "Manajemen Kelas",
              "Praktek Pengalaman Lapangan (PPL)"
            ]}
          />
        </div>

        <SectionTitle title="Program Pascasarjana (S2)" subtitle="Pendalaman akademik dan profesionalitas kepemimpinan." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProgramCard 
            title="Magister Teologi (M.Th)"
            degree="Pascasarjana"
            colorClass="border-secondary"
            iconBgClass="bg-red-50 text-secondary"
            icon={<Layers size={32} />}
            desc="Program lanjutan bagi hamba Tuhan yang ingin memperdalam wawasan teologis dan kemampuan analisis untuk menjawab tantangan zaman."
            features={[
              "Teologi Kontekstual Papua",
              "Kepemimpinan Kristen Lanjut",
              "Metodologi Penelitian Teologi",
              "Tesis Akademik"
            ]}
          />
          <ProgramCard 
            title="Magister PAK (M.Pd)"
            degree="Pascasarjana"
            colorClass="border-purple-600"
            iconBgClass="bg-purple-50 text-purple-600"
            icon={<GraduationCap size={32} />}
            desc="Dirancang untuk pemimpin pendidikan, pengawas, dan dosen PAK yang ingin meningkatkan kompetensi profesional dan manajerial."
            features={[
              "Filsafat Pendidikan Kristen",
              "Manajemen Pendidikan Kristen",
              "Pengembangan Kurikulum Lanjut",
              "Evaluasi Pendidikan"
            ]}
          />
        </div>
      </Section>

      <Section id="fasilitas" className="bg-gray-100">
        <div className="text-center max-w-3xl mx-auto">
           <h2 className="text-3xl font-bold font-serif text-primary mb-6">Fasilitas Penunjang Akademik</h2>
           <p className="text-gray-600 mb-12">
             Kami menyediakan lingkungan belajar yang kondusif dengan fasilitas lengkap untuk mendukung proses pembelajaran dan pembentukan karakter mahasiswa.
           </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Perpustakaan Digital & Fisik', icon: '📚' },
              { label: 'Ruang Kelas Multimedia', icon: '🖥️' },
              { label: 'Laboratorium Bahasa', icon: '🎧' },
              { label: 'Kapel Ibadah', icon: '⛪' },
              { label: 'Asrama Putra & Putri', icon: '🏘️' },
              { label: 'Akses Wi-Fi Kampus', icon: '📶' },
              { label: 'Ruang Diskusi Mahasiswa', icon: '💬' },
              { label: 'Lapangan Olahraga', icon: '🏀' }
            ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <span className="font-semibold text-gray-800">{item.label}</span>
                </div>
            ))}
        </div>
      </Section>
    </>
  );
};