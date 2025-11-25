import React from 'react';
import { Section, SectionTitle } from '../components/UI';
import { BookOpen, Star, Heart } from 'lucide-react';

export const ProfileValues: React.FC = () => {
  return (
    <>
      <div className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Nilai-Nilai Inti</h1>
          <p className="text-xl text-blue-200">Prinsip dasar yang menjadi pegangan seluruh civitas akademika.</p>
        </div>
      </div>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { icon: <BookOpen className="w-10 h-10" />, title: "Alkitabiah", desc: "Menjadikan Alkitab sebagai otoritas tertinggi dalam iman dan praktik kehidupan." },
                { icon: <Star className="w-10 h-10" />, title: "Integritas", desc: "Menjunjung tinggi kejujuran, disiplin, dan tanggung jawab dalam setiap aspek pelayanan." },
                { icon: <Heart className="w-10 h-10" />, title: "Misioner", desc: "Memiliki hati untuk menjangkau jiwa-jiwa dan melayani sesama tanpa pamrih." }
            ].map((val, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg text-center hover:bg-gray-50 transition-colors group">
                    <div className="bg-accent w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform">
                        {val.icon}
                    </div>
                    <h3 className="text-xl font-bold font-serif mb-3 text-primary">{val.title}</h3>
                    <p className="text-gray-600">{val.desc}</p>
                </div>
            ))}
        </div>
      </Section>
    </>
  );
};