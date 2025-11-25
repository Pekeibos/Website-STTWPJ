import React from 'react';
import { Section, SectionTitle, Button } from '../components/UI';

export const TracerStudy: React.FC = () => {
  return (
    <>
       <div className="bg-secondary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Tracer Study</h1>
          <p className="text-xl text-red-100">Penelusuran Alumni STT Walter Post Jayapura</p>
        </div>
      </div>
      
      <Section>
        <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg">
                <h3 className="font-bold text-lg text-primary mb-2">Mengapa Tracer Study Penting?</h3>
                <p className="text-gray-700 text-sm">
                    Data Anda membantu kami meningkatkan kualitas kurikulum dan pelayanan kampus agar tetap relevan dengan kebutuhan gereja dan masyarakat. Mohon partisipasinya.
                </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <SectionTitle title="Formulir Data Alumni" />
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Nama Lengkap</label>
                            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Beserta gelar..." />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Tahun Masuk</label>
                            <input type="number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Contoh: 2015" />
                        </div>
                         <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Tahun Lulus</label>
                            <input type="number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Contoh: 2019" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Program Studi</label>
                            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none">
                                <option>S1 Teologi</option>
                                <option>S1 Pendidikan Agama Kristen</option>
                                <option>S2 Magister Teologi</option>
                                <option>S2 Magister PAK</option>
                            </select>
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Pekerjaan / Pelayanan Saat Ini</label>
                        <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Nama Gereja / Sekolah / Instansi" />
                    </div>

                    <div>
                         <label className="block text-sm font-bold text-gray-700 mb-2">Nomor WhatsApp Aktif</label>
                         <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none" placeholder="+62..." />
                    </div>

                    <Button className="w-full bg-primary hover:bg-blue-800 text-lg">Kirim Data</Button>
                </form>
            </div>
        </div>
      </Section>
    </>
  );
};