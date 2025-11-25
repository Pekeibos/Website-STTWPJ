import React from 'react';
import { Section, SectionTitle, Button } from '../components/UI';
import { GraduationCap, CheckCircle } from 'lucide-react';

export const ProdiS2PAK: React.FC = () => {
  return (
    <>
      <div className="bg-gray-800 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="bg-white/10 w-fit mx-auto px-4 py-1 rounded-full text-sm font-bold mb-4">PASCASARJANA (S2)</div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Magister PAK (M.Pd)</h1>
          <p className="text-xl text-gray-300">Mengembangkan Kepemimpinan Pendidikan Kristen yang Inovatif.</p>
        </div>
      </div>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold font-serif mb-4 text-primary">Deskripsi Program</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                   Program Magister Pendidikan Agama Kristen (M.Pd) dirancang untuk para pendidik, kepala sekolah, dan pemimpin pelayanan yang ingin meningkatkan kompetensi profesional dan manajerial dalam pendidikan Kristen.
                </p>
                
                <h3 className="text-2xl font-bold font-serif mb-4 text-primary mt-8">Profil Lulusan</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {['Dosen PAK', 'Kepala Sekolah Kristen', 'Pengawas Pendidikan Agama', 'Konsultan Kurikulum'].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                            <CheckCircle className="text-accent" /> {item}
                        </div>
                    ))}
                </div>

                <h3 className="text-2xl font-bold font-serif mb-4 text-primary mt-8">Mata Kuliah Unggulan</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Filsafat Pendidikan Kristen</li>
                    <li>Kepemimpinan Pendidikan</li>
                    <li>Desain Kurikulum PAK</li>
                    <li>Metodologi Penelitian Pendidikan</li>
                </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-fit">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center text-gray-800 mb-6">
                    <GraduationCap size={32} />
                </div>
                <h4 className="font-bold text-xl mb-4">Informasi Program</h4>
                <div className="space-y-4 text-sm text-gray-600 mb-8">
                    <div className="flex justify-between border-b pb-2">
                        <span>Gelar</span>
                        <span className="font-bold text-gray-900">Magister Pendidikan (M.Pd)</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                        <span>Masa Studi</span>
                        <span className="font-bold text-gray-900">4 Semester</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                        <span>Syarat</span>
                        <span className="font-bold text-gray-900">S1 Pendidikan / S1 Umum</span>
                    </div>
                </div>
                <Button to="/layanan/pmb" variant="outline" className="w-full">Daftar Sekarang</Button>
            </div>
        </div>
      </Section>
    </>
  );
};