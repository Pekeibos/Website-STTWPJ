import React from 'react';
import { Section, SectionTitle } from '../components/UI';
import { Users, Music, Trophy, BookHeart, HandHeart } from 'lucide-react';

export const StudentOrg: React.FC = () => {
  return (
    <>
      <div className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Organisasi Mahasiswa</h1>
          <p className="text-xl text-blue-200">Wadah pengembangan kepemimpinan dan minat bakat mahasiswa.</p>
        </div>
      </div>
      
      <Section>
        <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-accent flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users size={48} className="text-primary" />
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold font-serif text-gray-900 mb-2">Badan Eksekutif Mahasiswa (BEM)</h3>
                    <p className="text-gray-600 mb-4">
                        BEM STT Walter Post Jayapura adalah organisasi induk kemahasiswaan yang berfungsi sebagai pelaksana kegiatan kemahasiswaan serta jembatan aspirasi antara mahasiswa dan institusi.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <span className="px-3 py-1 bg-blue-50 text-blue-800 text-sm font-bold rounded-full">Periode 2024-2025</span>
                        <span className="px-3 py-1 bg-amber-50 text-amber-800 text-sm font-bold rounded-full">Ketua: Simon Kogoya</span>
                    </div>
                </div>
            </div>
        </div>

        <SectionTitle title="Unit Kegiatan Mahasiswa (UKM)" subtitle="Salurkan bakat dan talenta untuk kemuliaan Tuhan." centered />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl shadow border border-gray-100 hover:border-primary transition-colors group">
                <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-100">
                    <Music className="text-pink-600" />
                </div>
                <h4 className="font-bold text-lg mb-2">Paduan Suara & Musik</h4>
                <p className="text-sm text-gray-600">Melatih vokal dan musik gerejawi untuk pelayanan ibadah kampus dan gereja-gereja.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow border border-gray-100 hover:border-primary transition-colors group">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-100">
                    <Trophy className="text-green-600" />
                </div>
                <h4 className="font-bold text-lg mb-2">Olahraga</h4>
                <p className="text-sm text-gray-600">Futsal, Voli, dan Basket sebagai sarana menjaga kebugaran dan sportivitas.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border border-gray-100 hover:border-primary transition-colors group">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-100">
                    <HandHeart className="text-purple-600" />
                </div>
                <h4 className="font-bold text-lg mb-2">Pelayanan Pedesaan</h4>
                <p className="text-sm text-gray-600">Tim misi mahasiswa yang bergerak melayani ke pos-pos PI di pedalaman Papua.</p>
            </div>

             <div className="bg-white p-6 rounded-xl shadow border border-gray-100 hover:border-primary transition-colors group">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100">
                    <BookHeart className="text-blue-600" />
                </div>
                <h4 className="font-bold text-lg mb-2">Persekutuan Doa</h4>
                <p className="text-sm text-gray-600">Wadah pembinaan rohani harian bagi mahasiswa di asrama.</p>
            </div>
        </div>
      </Section>
    </>
  );
};