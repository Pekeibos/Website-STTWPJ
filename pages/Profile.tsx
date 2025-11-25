import React from 'react';
import { Section, SectionTitle } from '../components/UI';
import { Award, Users, ShieldCheck, ChevronRight, Heart, Star, BookOpen } from 'lucide-react';

export const Profile: React.FC = () => {
  return (
    <>
      <div className="bg-primary text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Profil Kampus</h1>
          <p className="text-xl text-blue-200">Mengenal lebih dekat STT Walter Post Jayapura</p>
        </div>
      </div>

      <Section id="sejarah">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <SectionTitle title="Sejarah Singkat STT WPJ" />
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                Sekolah Tinggi Teologi (STT) Walter Post Jayapura didirikan sebagai respon terhadap kebutuhan mendesak akan pemimpin gereja yang terdidik secara teologis dan memiliki hati misi di tanah Papua. Nama "Walter Post" diambil untuk mengenang jasa misionaris yang mendedikasikan hidupnya bagi penyebaran Injil di wilayah ini.
              </p>
              <p className="mb-4">
                Sejak berdirinya pada tahun 1980-an, institusi ini telah melewati berbagai fase perkembangan yang signifikan. Dari awal yang sederhana dengan fasilitas terbatas, kini STT Walter Post telah berkembang menjadi institusi pendidikan tinggi teologi terkemuka di Papua dengan fasilitas modern dan kurikulum yang terintegrasi.
              </p>
              <p>
                Ribuan alumni kami kini melayani di berbagai denominasi gereja, lembaga pendidikan, dan organisasi nirlaba, membawa dampak positif bagi masyarakat di seluruh Indonesia, khususnya di Tanah Papua.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/oldcampus/400/500" alt="Sejarah 1" className="rounded-lg shadow-md w-full h-full object-cover transform translate-y-8" />
            <img src="https://picsum.photos/seed/founder/400/500" alt="Sejarah 2" className="rounded-lg shadow-md w-full h-full object-cover" />
          </div>
        </div>
      </Section>

      <Section id="visi-misi" className="bg-gray-50" pattern>
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle title="Visi & Misi" centered />
          
          <div className="bg-white p-10 rounded-xl shadow-lg mb-8 border-l-8 border-primary text-left transform transition hover:-translate-y-1 duration-300">
            <h3 className="text-2xl font-bold text-primary mb-4 font-serif flex items-center gap-3">
              <span className="bg-primary/10 p-2 rounded-full"><Award size={24} /></span>
              Visi
            </h3>
            <p className="text-lg text-gray-800 italic leading-relaxed font-medium">
              "Menjadi Perguruan Tinggi yang Mandiri dan Unggul dalam Teologi Kontekstual Pada Tahun 2031"
            </p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-lg border-l-8 border-accent text-left transform transition hover:-translate-y-1 duration-300">
            <h3 className="text-2xl font-bold text-accent mb-4 font-serif flex items-center gap-3">
              <span className="bg-accent/10 p-2 rounded-full"><ShieldCheck size={24} /></span>
              Misi
            </h3>
            <ul className="space-y-4 text-gray-700">
              {[
                "Menyelenggarakan pendidikan teologi dan pendidikan agama Kristen yang berkualitas sesuai standar nasional.",
                "Melaksanakan penelitian teologis yang kontekstual dengan budaya Papua dan Indonesia.",
                "Melaksanakan pengabdian kepada masyarakat gereja dan masyarakat umum sebagai wujud kesaksian iman.",
                "Membangun karakter mahasiswa yang takut akan Tuhan dan memiliki semangat melayani."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* NEW: Nilai-Nilai Section */}
      <Section id="nilai" className="bg-primary text-white">
        <SectionTitle title="Nilai-Nilai Inti" subtitle="Prinsip dasar yang menjadi pegangan seluruh civitas akademika." centered light />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
                { icon: <BookOpen className="w-10 h-10" />, title: "Alkitabiah", desc: "Menjadikan Alkitab sebagai otoritas tertinggi dalam iman dan praktik kehidupan." },
                { icon: <Star className="w-10 h-10" />, title: "Integritas", desc: "Menjunjung tinggi kejujuran, disiplin, dan tanggung jawab dalam setiap aspek pelayanan." },
                { icon: <Heart className="w-10 h-10" />, title: "Misioner", desc: "Memiliki hati untuk menjangkau jiwa-jiwa dan melayani sesama tanpa pamrih." }
            ].map((val, idx) => (
                <div key={idx} className="bg-blue-800/50 p-8 rounded-xl border border-blue-700 text-center hover:bg-white hover:text-primary transition-colors group">
                    <div className="bg-accent w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform">
                        {val.icon}
                    </div>
                    <h3 className="text-xl font-bold font-serif mb-3">{val.title}</h3>
                    <p className="text-gray-300 group-hover:text-gray-600">{val.desc}</p>
                </div>
            ))}
        </div>
      </Section>

      <Section id="akreditasi">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div>
             <SectionTitle title="Akreditasi Institusi" subtitle="Komitmen kami terhadap mutu pendidikan." />
             <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-primary font-bold text-2xl">B</div>
                   <div>
                     <h4 className="text-xl font-bold">Terakreditasi BAN-PT</h4>
                     <p className="text-gray-500 text-sm">Badan Akreditasi Nasional Perguruan Tinggi</p>
                   </div>
                </div>
                <p className="text-gray-600 mb-4">
                  STT Walter Post Jayapura telah terakreditasi oleh BAN-PT, menjamin kualitas pendidikan yang memenuhi standar nasional pendidikan tinggi di Indonesia.
                </p>
                <div className="flex gap-2">
                   <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-xs font-bold">Institusi: Baik Sekali</span>
                   <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-xs font-bold">Prodi: Terakreditasi B</span>
                </div>
             </div>
           </div>
           
           <div id="struktur">
             <SectionTitle title="Struktur Organisasi" subtitle="Tata kelola yang profesional dan transparan." />
             <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 relative overflow-hidden group">
                <div className="flex flex-col gap-4">
                   <div className="border-l-4 border-primary pl-4">
                      <h5 className="font-bold text-gray-900">Ketua STT</h5>
                      <p className="text-sm text-gray-500">Pimpinan Tertinggi Akademik</p>
                   </div>
                   <div className="border-l-4 border-accent pl-4 ml-4">
                      <h5 className="font-bold text-gray-900">Wakil Ketua I, II, III</h5>
                      <p className="text-sm text-gray-500">Bidang Akademik, Keuangan, & Kemahasiswaan</p>
                   </div>
                   <div className="border-l-4 border-gray-400 pl-4 ml-8">
                      <h5 className="font-bold text-gray-900">Kaprodi & Lembaga</h5>
                      <p className="text-sm text-gray-500">Pelaksana Akademik & Penjaminan Mutu</p>
                   </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                  <button className="text-primary font-bold text-sm flex items-center justify-center gap-2 hover:underline">
                    Lihat Bagan Lengkap <ChevronRight size={16} />
                  </button>
                </div>
             </div>
           </div>
        </div>
      </Section>
    </>
  );
};