import React from 'react';
import { Section, SectionTitle } from '../components/UI';

export const ProfileAccreditation: React.FC = () => {
  return (
    <>
      <div className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Akreditasi</h1>
          <p className="text-xl text-blue-200">Komitmen terhadap Mutu Pendidikan</p>
        </div>
      </div>
      <Section>
         <div className="max-w-3xl mx-auto">
             <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                   <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-primary font-bold text-4xl shadow-inner">B</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Terakreditasi BAN-PT</h3>
                <p className="text-gray-500 mb-6 font-semibold">Badan Akreditasi Nasional Perguruan Tinggi</p>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  STT Walter Post Jayapura telah terakreditasi oleh BAN-PT, menjamin kualitas pendidikan yang memenuhi standar nasional pendidikan tinggi di Indonesia. Akreditasi ini mencakup institusi maupun program studi yang diselenggarakan.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                   <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                      <span className="block text-green-800 font-bold text-lg">Institusi</span>
                      <span className="text-green-600">Predikat: Baik Sekali</span>
                   </div>
                   <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <span className="block text-blue-800 font-bold text-lg">Program Studi Teologi</span>
                      <span className="text-blue-600">Predikat: B</span>
                   </div>
                   <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                      <span className="block text-amber-800 font-bold text-lg">Program Studi PAK</span>
                      <span className="text-amber-600">Predikat: B</span>
                   </div>
                   <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <span className="block text-gray-800 font-bold text-lg">Pascasarjana</span>
                      <span className="text-gray-600">Terakreditasi</span>
                   </div>
                </div>
             </div>
           </div>
      </Section>
    </>
  );
};