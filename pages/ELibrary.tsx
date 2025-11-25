import React from 'react';
import { Section, SectionTitle, Button } from '../components/UI';
import { Search } from 'lucide-react';

export const ELibrary: React.FC = () => {
  return (
    <>
      <div className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Perpustakaan Digital</h1>
          <p className="text-xl text-blue-200">Akses ribuan literatur teologi dari mana saja.</p>
        </div>
      </div>
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="relative">
                <input type="text" placeholder="Cari judul buku, jurnal, atau penulis..." className="w-full px-6 py-4 rounded-full border-2 border-gray-200 shadow-md focus:border-primary focus:outline-none text-lg" />
                <button className="absolute right-2 top-2 bg-primary text-white p-3 rounded-full hover:bg-blue-800 transition-colors">
                    <Search size={24} />
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow border border-gray-100 text-center">
                <h3 className="font-bold text-lg mb-2">Jurnal Teologi</h3>
                <p className="text-sm text-gray-500 mb-4">Akses jurnal STT WPJ dan jurnal internasional.</p>
                <Button variant="outline" className="text-sm">Jelajahi</Button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border border-gray-100 text-center">
                <h3 className="font-bold text-lg mb-2">E-Book</h3>
                <p className="text-sm text-gray-500 mb-4">Koleksi buku elektronik teologi & umum.</p>
                <Button variant="outline" className="text-sm">Jelajahi</Button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border border-gray-100 text-center">
                <h3 className="font-bold text-lg mb-2">Skripsi & Tesis</h3>
                <p className="text-sm text-gray-500 mb-4">Arsip tugas akhir mahasiswa.</p>
                <Button variant="outline" className="text-sm">Jelajahi</Button>
            </div>
        </div>
      </Section>
    </>
  );
};