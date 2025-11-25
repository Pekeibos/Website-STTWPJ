import React from 'react';
import { Section, SectionTitle, Button } from '../components/UI';
import { Book, CheckCircle } from 'lucide-react';

export const ProdiS1Teologi: React.FC = () => {
  return (
    <>
      <div className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="bg-white/10 w-fit mx-auto px-4 py-1 rounded-full text-sm font-bold mb-4">SARJANA (S1)</div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Teologi (S.Th)</h1>
          <p className="text-xl text-blue-200">Mempersiapkan Hamba Tuhan yang Kritis, Kreatif, dan Alkitabiah.</p>
        </div>
      </div>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold font-serif mb-4 text-primary dark:text-blue-400">Deskripsi Program</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Program Sarjana Teologi dirancang untuk mempersiapkan mahasiswa menjadi hamba Tuhan, pendeta, dan pemimpin gereja yang memiliki pemahaman Alkitab yang mendalam, kemampuan eksegese yang tajam, serta kepekaan terhadap konteks pelayanan di Papua dan Indonesia.
                </p>
                
                <h3 className="text-2xl font-bold font-serif mb-4 text-primary dark:text-blue-400 mt-8">Profil Lulusan</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {['Pendeta/Gembala Jemaat', 'Penginjil', 'Pemimpin Organisasi Kristen', 'Peneliti Teologi Pemula'].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm text-gray-800 dark:text-gray-200 hover:-translate-y-1 transition-transform duration-300">
                            <CheckCircle className="text-accent flex-shrink-0" /> <span className="font-medium">{item}</span>
                        </div>
                    ))}
                </div>

                <h3 className="text-2xl font-bold font-serif mb-4 text-primary dark:text-blue-400 mt-8">Mata Kuliah Unggulan</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Bahasa Ibrani & Yunani</li>
                    <li>Teologi Sistematika 1-4</li>
                    <li>Hermeneutik</li>
                    <li>Teologi Kontekstual Papua</li>
                    <li>Homiletika (Ilmu Berkhotbah)</li>
                </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 h-fit">
                <div className="bg-blue-50 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center text-primary dark:text-blue-400 mb-6">
                    <Book size={32} />
                </div>
                <h4 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">Informasi Program</h4>
                <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
                    <div className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                        <span>Gelar</span>
                        <span className="font-bold text-gray-900 dark:text-white">Sarjana Teologi (S.Th)</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                        <span>Masa Studi</span>
                        <span className="font-bold text-gray-900 dark:text-white">8 Semester (4 Tahun)</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                        <span>SKS</span>
                        <span className="font-bold text-gray-900 dark:text-white">144 - 150 SKS</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                        <span>Akreditasi</span>
                        <span className="font-bold text-green-600 dark:text-green-400">B (Baik)</span>
                    </div>
                </div>
                <Button to="/layanan/pmb" className="w-full">Daftar Sekarang</Button>
            </div>
        </div>
      </Section>
    </>
  );
};