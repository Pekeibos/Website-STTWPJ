import React from 'react';
import { Section, SectionTitle } from '../components/UI';
import { Award, ShieldCheck } from 'lucide-react';

export const ProfileVision: React.FC = () => {
  return (
    <>
      <div className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Visi & Misi</h1>
          <p className="text-xl text-blue-200">Arah dan Tujuan Institusi</p>
        </div>
      </div>
      <Section className="bg-gray-50" pattern>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-10 rounded-xl shadow-lg mb-8 border-l-8 border-primary text-left">
            <h3 className="text-2xl font-bold text-primary mb-4 font-serif flex items-center gap-3">
              <span className="bg-primary/10 p-2 rounded-full"><Award size={24} /></span>
              Visi
            </h3>
            <p className="text-lg text-gray-800 italic leading-relaxed font-medium">
              "Menjadi Perguruan Tinggi yang Mandiri dan Unggul dalam Teologi Kontekstual Pada Tahun 2031"
            </p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-lg border-l-8 border-accent text-left">
            <h3 className="text-2xl font-bold text-accent mb-4 font-serif flex items-center gap-3">
              <span className="bg-accent/10 p-2 rounded-full"><ShieldCheck size={24} /></span>
              Misi
            </h3>
            <ul className="space-y-4 text-gray-700">
              {[
                "Menyelenggarakan pendidikan teologi dan pendidikan agama Kristen yang berkualitas sesuai standar nasional.",
                "Melaksanakan penelitian teologis yang kontekstual dengan budaya Papua dan Indonesia.",
                "Melaksanakan pengabdian kepada masyarakat gereja dan masyarakat umum sebagai wujud kesaksian iman.",
                "Membangun karakter mahasiswa yang takut akan Tuhan dan memiliki semangat melayani."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
};