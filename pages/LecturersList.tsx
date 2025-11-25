import React from 'react';
import { Section } from '../components/UI';
import { Mail, Linkedin } from 'lucide-react';

const lecturers = [
  { 
    id: 1, 
    name: "Pdt. Dr. Yance Kogoya, M.Th", 
    role: "Ketua STT", 
    expertise: "Teologi Sistematika", 
    image: "https://picsum.photos/seed/lecturer1/400/400",
    email: "yance.kogoya@sttwpj.ac.id",
    linkedin: "https://www.linkedin.com"
  },
  { 
    id: 2, 
    name: "Dr. Sarah Wenda, M.Pd.K", 
    role: "Wakil Ketua I", 
    expertise: "Pendidikan Agama Kristen", 
    image: "https://picsum.photos/seed/lecturer2/400/400",
    email: "sarah.wenda@sttwpj.ac.id",
    linkedin: "https://www.linkedin.com"
  },
  { 
    id: 3, 
    name: "Pdt. Marthen Tabuni, M.Miss", 
    role: "Kaprodi Teologi", 
    expertise: "Misiologi", 
    image: "https://picsum.photos/seed/lecturer3/400/400",
    email: "marthen.tabuni@sttwpj.ac.id",
    linkedin: "https://www.linkedin.com"
  },
  { 
    id: 4, 
    name: "Dr. Ruth Jigibalom, M.Th", 
    role: "Kaprodi Pascasarjana", 
    expertise: "Perjanjian Baru", 
    image: "https://picsum.photos/seed/lecturer4/400/400",
    email: "ruth.jigibalom@sttwpj.ac.id",
    linkedin: "https://www.linkedin.com"
  },
  { 
    id: 5, 
    name: "Pdt. Simon Wanimbo, M.Th", 
    role: "Dosen Tetap", 
    expertise: "Perjanjian Lama", 
    image: "https://picsum.photos/seed/lecturer5/400/400",
    email: "simon.wanimbo@sttwpj.ac.id",
    linkedin: "https://www.linkedin.com"
  },
  { 
    id: 6, 
    name: "Debora Enumbi, M.Pd", 
    role: "Dosen Tetap", 
    expertise: "Psikologi Pendidikan", 
    image: "https://picsum.photos/seed/lecturer6/400/400",
    email: "debora.enumbi@sttwpj.ac.id",
    linkedin: "https://www.linkedin.com"
  },
  { 
    id: 7, 
    name: "Pdt. Lukas Enembe, M.Min", 
    role: "Dosen Tetap", 
    expertise: "Pastoral Konseling", 
    image: "https://picsum.photos/seed/lecturer7/400/400",
    email: "lukas.enembe@sttwpj.ac.id",
    linkedin: "https://www.linkedin.com"
  },
  { 
    id: 8, 
    name: "Maria Haluk, M.Th", 
    role: "Dosen Tetap", 
    expertise: "Sejarah Gereja", 
    image: "https://picsum.photos/seed/lecturer8/400/400",
    email: "maria.haluk@sttwpj.ac.id",
    linkedin: "https://www.linkedin.com"
  },
];

export const LecturersList: React.FC = () => {
  return (
    <>
      <div className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Dosen (Tenaga Pendidik)</h1>
          <p className="text-xl text-blue-200">Pengajar berkualitas dengan dedikasi tinggi.</p>
        </div>
      </div>
      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
                        <a 
                          href={`mailto:${lecturer.email}`} 
                          className="text-white hover:text-accent transition-colors p-2 hover:bg-white/20 rounded-full"
                          title="Kirim Email"
                        >
                          <Mail />
                        </a>
                        <a 
                          href={lecturer.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-white hover:text-accent transition-colors p-2 hover:bg-white/20 rounded-full"
                          title="Profil LinkedIn"
                        >
                          <Linkedin />
                        </a>
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
      </Section>
    </>
  );
};