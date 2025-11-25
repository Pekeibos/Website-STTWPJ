import React from 'react';
import { Section, SectionTitle, Button } from '../components/UI';
import { Layers, CheckCircle } from 'lucide-react';

export const ProdiS2Teologi: React.FC = () => {
  return (
    <>
      <div className="bg-secondary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="bg-white/10 w-fit mx-auto px-4 py-1 rounded-full text-sm font-bold mb-4">PASCASARJANA (S2)</div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Magister Teologi (M.Th)</h1>
          <p className="text-xl text-red-100">Memperdalam Wawasan Teologis untuk Kepemimpinan yang Efektif.</p>
        </div>
      </div>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold font-serif mb-4 text-secondary">Deskripsi Program</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    Program Magister Teologi ditujukan bagi lulusan sarjana teologi yang ingin memperdalam keilmuan teologis mereka. Program ini menekankan pada kemampuan analisis teologis yang kritis dan konstruktif dalam menjawab tantangan zaman, khususnya dalam konteks masyarakat majemuk.
                </p>
                
                <h3 className="text-2xl font-bold font-serif mb-4 text-secondary mt-8">Konsentrasi Studi</h3>
                 <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                    <li>Teologi Sistematika</li>
                    <li>Pastoral Konseling</li>
                    <li>Kepemimpinan Kristen</li>
                </ul>

                <h3 className="text-2xl font-bold font-serif mb-4 text-secondary mt-8">Profil Lulusan</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {['Dosen Teologi', 'Peneliti', 'Pemimpin Sinode/Lembaga', 'Penulis Buku Rohani'].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                            <CheckCircle className="text-primary" /> {item}
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-fit">
                <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center text-secondary mb-6">
                    <Layers size={32} />
                </div>
                <h4 className="font-bold text-xl mb-4">Informasi Program</h4>
                <div className="space-y-4 text-sm text-gray-600 mb-8">
                    <div className="flex justify-between border-b pb-2">
                        <span>Gelar</span>
                        <span className="font-bold text-gray-900">Magister Teologi (M.Th)</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                        <span>Masa Studi</span>
                        <span className="font-bold text-gray-900">4 Semester</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                        <span>Syarat</span>
                        <span className="font-bold text-gray-900">S1 Teologi / S1 Umum (Matrikulasi)</span>
                    </div>
                </div>
                <Button to="/layanan/pmb" variant="secondary" className="w-full">Daftar Sekarang</Button>
            </div>
        </div>
      </Section>
    </>
  );
};