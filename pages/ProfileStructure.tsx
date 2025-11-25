import React from 'react';
import { Section, SectionTitle } from '../components/UI';
import { User, ChevronDown } from 'lucide-react';

export const ProfileStructure: React.FC = () => {
  return (
    <>
      <div className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Struktur Organisasi</h1>
          <p className="text-xl text-blue-200">Tata Kelola Kampus STT Walter Post Jayapura</p>
        </div>
      </div>
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
            {/* Tree Visualization Mockup */}
            <div className="flex flex-col items-center space-y-8">
                {/* Level 1 */}
                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-primary text-center w-64 z-10">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 overflow-hidden">
                         <img src="https://picsum.photos/seed/chairman/100/100" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-bold text-lg">Pdt. Dr. Yance Kogoya, M.Th</h3>
                    <p className="text-sm text-primary font-bold">KETUA STT</p>
                </div>

                {/* Connector */}
                <div className="w-0.5 h-8 bg-gray-400 -my-4"></div>
                <div className="w-3/4 h-0.5 bg-gray-400"></div>

                {/* Level 2 */}
                <div className="grid grid-cols-3 gap-4 w-full">
                    <div className="flex flex-col items-center">
                        <div className="h-4 w-0.5 bg-gray-400 mb-4"></div>
                        <div className="bg-white p-4 rounded-lg shadow-md text-center w-full">
                            <h4 className="font-bold text-gray-900 text-sm">Wakil Ketua I</h4>
                            <p className="text-xs text-gray-500">Bidang Akademik</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="h-4 w-0.5 bg-gray-400 mb-4"></div>
                        <div className="bg-white p-4 rounded-lg shadow-md text-center w-full">
                            <h4 className="font-bold text-gray-900 text-sm">Wakil Ketua II</h4>
                            <p className="text-xs text-gray-500">Bidang Keuangan</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="h-4 w-0.5 bg-gray-400 mb-4"></div>
                        <div className="bg-white p-4 rounded-lg shadow-md text-center w-full">
                            <h4 className="font-bold text-gray-900 text-sm">Wakil Ketua III</h4>
                            <p className="text-xs text-gray-500">Bidang Kemahasiswaan</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <SectionTitle title="Unit & Lembaga" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 p-3 bg-gray-50 rounded"><ChevronDown size={16} /> Lembaga Penjaminan Mutu (LPM)</li>
                        <li className="flex items-center gap-3 p-3 bg-gray-50 rounded"><ChevronDown size={16} /> Lembaga Penelitian & Pengabdian Masyarakat</li>
                        <li className="flex items-center gap-3 p-3 bg-gray-50 rounded"><ChevronDown size={16} /> Biro Administrasi Akademik</li>
                    </ul>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 p-3 bg-gray-50 rounded"><ChevronDown size={16} /> Perpustakaan</li>
                        <li className="flex items-center gap-3 p-3 bg-gray-50 rounded"><ChevronDown size={16} /> Program Studi Sarjana (S1)</li>
                        <li className="flex items-center gap-3 p-3 bg-gray-50 rounded"><ChevronDown size={16} /> Program Pascasarjana (S2)</li>
                    </ul>
                </div>
            </div>
        </div>
      </Section>
    </>
  );
};