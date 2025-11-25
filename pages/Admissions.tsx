import React from 'react';
import { Section, SectionTitle, Button } from '../components/UI';
import { FileText, Check, Calendar, Download } from 'lucide-react';

export const Admissions: React.FC = () => {
  return (
    <>
      <div className="bg-secondary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Penerimaan Mahasiswa Baru</h1>
          <p className="text-xl text-red-100">Bergabunglah menjadi bagian dari keluarga besar STT Walter Post Jayapura.</p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Info Column */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <SectionTitle title="Alur Pendaftaran" />
              <div className="space-y-6">
                {[
                  { step: 1, title: 'Isi Formulir', desc: 'Isi formulir pendaftaran online atau datang langsung ke kampus.' },
                  { step: 2, title: 'Pembayaran', desc: 'Lakukan pembayaran biaya pendaftaran melalui bank yang ditunjuk.' },
                  { step: 3, title: 'Tes Seleksi', desc: 'Mengikuti tes tertulis (Pengetahuan Alkitab & Bahasa Inggris) dan wawancara.' },
                  { step: 4, title: 'Daftar Ulang', desc: 'Jika dinyatakan lulus, lakukan daftar ulang dan pelengkapan berkas.' }
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {s.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{s.title}</h4>
                      <p className="text-gray-600">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                 <FileText size={20} /> Syarat Pendaftaran
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Fotokopi Ijazah SMA/SMK (Legalisir)', 'Fotokopi KTP & Kartu Keluarga', 'Pas Foto 3x4 & 4x6 (Warna)', 'Surat Baptis/Sidi', 'Surat Rekomendasi Gereja', 'Surat Keterangan Sehat'].map((req, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                    <Check size={16} className="text-green-600" /> {req}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
                 <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                 <Download size={20} /> Unduh Brosur
              </h3>
              <Button variant="outline" onClick={() => alert("Fitur unduh brosur (PDF) akan tersedia.")}>
                Download Brosur PMB 2024
              </Button>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white p-6 rounded-xl shadow-xl border-t-4 border-secondary h-fit sticky top-24">
            <h3 className="text-2xl font-bold mb-6 text-center font-serif">Formulir Minat</h3>
            <p className="text-sm text-gray-500 mb-6 text-center">Isi data singkat ini, staf PMB kami akan menghubungi Anda via WhatsApp.</p>
            
            <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                // Simple WA Redirect simulation
                const name = (document.getElementById('name') as HTMLInputElement).value;
                const prodi = (document.getElementById('prodi') as HTMLSelectElement).value;
                const msg = `Halo Admin STT Walter Post, saya ${name} berminat mendaftar di prodi ${prodi}. Mohon infonya.`;
                window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`, '_blank');
            }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                <input id="name" type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">No. WhatsApp</label>
                <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Asal Sekolah/Gereja</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Program Studi Diminati</label>
                <select id="prodi" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none">
                  <option value="S1 Teologi">S1 Teologi</option>
                  <option value="S1 PAK">S1 Pendidikan Agama Kristen</option>
                  <option value="S2 Teologi">S2 Magister Teologi</option>
                </select>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                 Kirim ke WhatsApp Admin
              </Button>
            </form>
          </div>

        </div>
      </Section>
    </>
  );
};