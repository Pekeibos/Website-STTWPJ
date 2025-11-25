import React from 'react';
import { Section, SectionTitle } from '../components/UI';

export const AcademicFacilities: React.FC = () => {
  return (
    <>
      <div className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Fasilitas Akademik</h1>
          <p className="text-xl text-blue-200">Sarana Penunjang Pembelajaran</p>
        </div>
      </div>
      <Section className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { label: 'Perpustakaan Digital', icon: '📚', desc: 'Koleksi ribuan buku teologi dan jurnal internasional.' },
              { label: 'Ruang Kelas Multimedia', icon: '🖥️', desc: 'Dilengkapi proyektor dan AC untuk kenyamanan belajar.' },
              { label: 'Laboratorium Bahasa', icon: '🎧', desc: 'Sarana praktek bahasa Ibrani, Yunani, dan Inggris.' },
              { label: 'Kapel Ibadah', icon: '⛪', desc: 'Pusat kegiatan spiritualitas mahasiswa dan dosen.' },
              { label: 'Asrama Putra & Putri', icon: '🏘️', desc: 'Tempat tinggal yang aman dan membina persekutuan.' },
              { label: 'Free Wi-Fi Area', icon: '📶', desc: 'Akses internet di seluruh area kampus.' },
              { label: 'Ruang Diskusi', icon: '💬', desc: 'Area terbuka untuk diskusi kelompok mahasiswa.' },
              { label: 'Lapangan Olahraga', icon: '🏀', desc: 'Fasilitas futsal, voli, dan basket.' },
              { label: 'Kantin Kampus', icon: '🍽️', desc: 'Menyediakan makanan sehat dan higienis.' }
            ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-2">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">{item.label}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
      </Section>
    </>
  );
};