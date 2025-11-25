import React from 'react';
import { Section } from '../components/UI';

const timelineData = [
  {
    year: "1986",
    title: "Dibuka program kuliah jarak jauh STT Jaffray Ujungpandang",
    desc: "Perkuliahan dilakukan di Gedung Ibadah Jemaat Bethesda Abepura"
  },
  {
    year: "1988",
    title: "Pindah ke Kompleks STA Ruland Lesnussa",
    desc: "Lokasi masih di Abepura"
  },
  {
    year: "1991",
    title: "Pindah ke Puspigra Kampung Harapan",
    desc: "Pengembangan fasilitas perkuliahan"
  },
  {
    year: "1999",
    title: "Menempati kampus permanen di Pos Tujuh Sentani",
    desc: "Status TERDAFTAR diperoleh"
  },
  {
    year: "2003",
    title: "Hibah dari CMA",
    desc: "Kampus menjadi milik sendiri dari hibah The Christian Missionary Alliance"
  },
  {
    year: "2007",
    title: "Status DIAKUI",
    desc: "SK Dirjen Bimas Kristen Depag RI Nomor DJ.III.Kep/HK.00.5/7/253/2007"
  },
  {
    year: "Sekarang",
    title: "Program S1 dan S2",
    desc: "Menyelenggarakan 4 program studi dengan 3 terakreditasi"
  }
];

export const ProfileHistory: React.FC = () => {
  return (
    <>
      <div className="bg-primary dark:bg-gray-900 text-white py-20 text-center relative overflow-hidden transition-colors duration-300">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Sejarah STT WPJ</h1>
          <p className="text-xl text-blue-200">Perjalanan Panjang Pelayanan dan Pendidikan</p>
        </div>
      </div>

      <Section className="bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto mb-16 text-justify">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              STT-WPJ berawal dari dibukanya program kuliah jarak jauh STT Jaffray Ujungpandang pada tahun 1986. Pimpinan GKII Irian Jaya pada saat itu, Pendeta Yosia Tebay, S.Th., sebagai Ketua Sinode menyambut baik tindak lanjut dari Konferensi Gereja Kemah Injil di Pyramid yang berlangsung pada 12-17 September 1986. Kegiatan perkuliahan dilakukan pertama kali di Gedung Ibadah Jemaat Bethesda Abepura. Pada tahun 1988, STT-WPJ kemudian menggunakan Kompleks STA Ruland Lesnussa yang masih berlokasi di Abepura. Tiga tahun kemudian, STT-WPJ kembali harus berpindah tempat ke Puspigra Kampung Harapan.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Barulah pada tahun akademik 1999/2000, STT-WPJ menempati kompleks lokasi yang sekarang di Pos Tujuh Sentani, Jayapura. Lokasi tersebut menjadi kampus utama dengan status milik sendiri yang berasal dari hibah The Christian Missionary Alliance (CMA) pada tahun 2003. STT-WPJ mendapatkan status "TERDAFTAR" pada tahun 1999 dan kemudian meningkat statusnya menjadi "DIAKUI" pada tahun 2007 melalui SK Direktorat Jenderal Bimbingan Masyarakat Kristen Departemen Agama RI Nomor DJ.III.Kep/HK.00.5/7/253/2007 tertanggal 15 Januari 2007.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Sejak saat itu, STT-WPJ menyelenggarakan program strata satu (S1) Jurusan Teologi/Kependetaan dan Pendidikan Agama Kristen. Sekarang PT ini menyelenggarakan program strata satu (S1) Jurusan Teologi/Kependetaan dan Pendidikan Agama Kristen serta program strata dua (S2) Jurusan Teologi/Kependetaan dan Pendidikan Agama Kristen. Tiga program strata satu (S1) Jurusan Teologi/Kependetaan dan Pendidikan Agama Kristen serta program strata dua (S2) Jurusan Teologi/Kependetaan terakreditasi. Tetapi Pendidikan Agama Kristen program strata dua (S2) dalam proses akreditasinya.
            </p>
        </div>

        {/* Timeline Container */}
        <div className="bg-primary dark:bg-gray-950 rounded-3xl p-8 md:p-16 shadow-2xl overflow-hidden relative transition-colors duration-300">
            {/* Subtle Grid Background */}
             <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <svg width="100%" height="100%">
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="text-center mb-16 relative z-10">
                <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm block mb-2">Sejarah</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Perjalanan Kami</h2>
            </div>

            <div className="relative max-w-5xl mx-auto z-10">
                {/* Central Line */}
                <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-transparent via-accent to-transparent transform md:-translate-x-1/2"></div>

                <div className="space-y-12">
                    {timelineData.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={index} className={`relative flex items-start md:items-center justify-between md:justify-normal ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                
                                {/* Spacer for Desktop */}
                                <div className="hidden md:block w-5/12"></div>

                                {/* Dot */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-primary dark:border-gray-900 shadow-[0_0_10px_rgba(217,119,6,0.8)] z-20 transform -translate-x-1.5 md:-translate-x-1/2 mt-1.5 md:mt-0"></div>

                                {/* Content Card */}
                                <div className="w-full md:w-5/12 pl-12 md:pl-0">
                                    <div className={`
                                        p-6 rounded-xl border border-white/10 transition-all duration-300 hover:bg-white/5 hover:border-accent/50 group
                                        ${isEven ? 'md:mr-10 md:text-right' : 'md:ml-10 md:text-left'}
                                    `}>
                                        <span className="text-accent font-bold text-2xl md:text-3xl block mb-2 group-hover:scale-110 transition-transform origin-left md:origin-inherit inline-block">{item.year}</span>
                                        <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
      </Section>
    </>
  );
};
