import React, { useState } from 'react';
import { Section, SectionTitle } from '../components/UI';
import { Mail, Linkedin, User } from 'lucide-react';

const lecturers = [
  { id: 1, name: "Pdt. Dr. Yance Kogoya, M.Th", role: "Ketua STT", expertise: "Teologi Sistematika", image: "https://picsum.photos/seed/lecturer1/400/400" },
  { id: 2, name: "Dr. Sarah Wenda, M.Pd.K", role: "Wakil Ketua I (Akademik)", expertise: "Pendidikan Agama Kristen", image: "https://picsum.photos/seed/lecturer2/400/400" },
  { id: 3, name: "Pdt. Marthen Tabuni, M.Miss", role: "Kaprodi Teologi", expertise: "Misiologi", image: "https://picsum.photos/seed/lecturer3/400/400" },
  { id: 4, name: "Dr. Ruth Jigibalom, M.Th", role: "Kaprodi Pascasarjana", expertise: "Perjanjian Baru", image: "https://picsum.photos/seed/lecturer4/400/400" },
  { id: 5, name: "Pdt. Simon Wanimbo, M.Th", role: "Dosen Tetap", expertise: "Perjanjian Lama", image: "https://picsum.photos/seed/lecturer5/400/400" },
  { id: 6, name: "Debora Enumbi, M.Pd", role: "Dosen Tetap", expertise: "Psikologi Pendidikan", image: "https://picsum.photos/seed/lecturer6/400/400" },
  { id: 7, name: "Pdt. Lukas Enembe, M.Min", role: "Dosen Tetap", expertise: "Pastoral Konseling", image: "https://picsum.photos/seed/lecturer7/400/400" },
  { id: 8, name: "Maria Haluk, M.Th", role: "Dosen Tetap", expertise: "Sejarah Gereja", image: "https://picsum.photos/seed/lecturer8/400/400" },
];

const staff = [
  { id: 1, name: "John Kogoya, S.E", role: "Kepala Tata Usaha", department: "Administrasi Umum" },
  { id: 2, name: "Martha Wenda, S.Kom", role: "Staf IT & SiAkad", department: "Pusat Data & Informasi" },
  { id: 3, name: "Petrus Tabuni", role: "Kepala Perpustakaan", department: "Perpustakaan" },
  { id: 4, name: "Lydia Enumbi, S.Ak", role: "Staf Keuangan", department: "Keuangan" },
  { id: 5, name: "Markus Yoman", role: "Staf Rumah Tangga", department: "Umum & Sarpras" },
];

export const Lecturers: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pendidik' | 'staf'>('pendidik');

  return (
    <>
      <div className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Dosen & Staf</h1>
          <p className="text-xl text-blue-200">SDM berkualitas yang berdedikasi untuk kemajuan STT Walter Post Jayapura.</p>
        </div>
      </div>

      <Section>
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-lg inline-flex">
                <button 
                    onClick={() => setActiveTab('pendidik')}
                    className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'pendidik' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:text-primary'}`}
                >
                    Dosen (Pendidik)
                </button>
                <button 
                    onClick={() => setActiveTab('staf')}
                    className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'staf' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:text-primary'}`}
                >
                    Staf (Kependidikan)
                </button>
            </div>
        </div>

        {activeTab === 'pendidik' ? (
            <>
                <SectionTitle 
                title="Tenaga Pendidik Profesional" 
                subtitle="Dosen-dosen STT Walter Post memiliki kualifikasi akademik S2 dan S3 dari perguruan tinggi terkemuka di dalam dan luar negeri."
                centered
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
                {lecturers.map((lecturer) => (
                    <div key={lecturer.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100">
                    <div className="relative overflow-hidden aspect-square">
                        <img 
                        src={lecturer.image} 
                        alt={lecturer.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <div className="flex gap-4">
                            <a href="#" className="text-white hover:text-accent"><Mail /></a>
                            <a href="#" className="text-white hover:text-accent"><Linkedin /></a>
                        </div>
                        </div>
                    </div>
                    <div className="p-6 text-center">
                        <h3 className="font-bold text-lg text-gray-900 mb-1 font-serif leading-tight">{lecturer.name}</h3>
                        <p className="text-accent text-sm font-semibold uppercase tracking-wide mb-2">{lecturer.role}</p>
                        <div className="h-px w-10 bg-gray-200 mx-auto mb-3"></div>
                        <p className="text-gray-500 text-sm italic">{lecturer.expertise}</p>
                    </div>
                    </div>
                ))}
                </div>
            </>
        ) : (
            <>
                 <SectionTitle 
                    title="Tenaga Kependidikan" 
                    subtitle="Staf profesional yang mendukung operasional akademik dan administrasi kampus."
                    centered
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {staff.map((s) => (
                        <div key={s.id} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-accent flex items-center gap-4 hover:-translate-y-1 transition-transform">
                            <div className="bg-gray-100 p-3 rounded-full text-gray-500">
                                <User size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900">{s.name}</h4>
                                <p className="text-primary font-semibold text-sm">{s.role}</p>
                                <p className="text-gray-500 text-xs mt-1">{s.department}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )}
      </Section>
    </>
  );
};