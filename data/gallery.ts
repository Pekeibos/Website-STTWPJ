
export interface GalleryItem {
  id: number;
  type: 'image' | 'video' | 'audio';
  category: string;
  title: string;
  url: string; // URL for image src, video embed, or audio file
  thumbnail?: string; // Optional thumbnail for video/audio
  desc: string;
  fullContent?: string; // Extended description or transcript
  date?: string;
}

export const galleryData: GalleryItem[] = [
  // Images - Sarana & Prasarana
  { 
    id: 1, 
    type: 'image', 
    category: 'Sarana & Prasarana', 
    title: 'Gedung Rektorat Utama', 
    url: 'https://picsum.photos/id/1018/1200/800', 
    desc: 'Pusat administrasi kampus STT WPJ.',
    fullContent: 'Gedung Rektorat Utama merupakan pusat administrasi seluruh kegiatan di STT Walter Post Jayapura. Gedung ini diresmikan pada tahun 2010 dan menampung ruang kerja Ketua, Wakil Ketua, serta staf administrasi. Arsitektur gedung menggabungkan unsur modern dengan sentuhan budaya Papua.',
    date: '10 Januari 2024'
  },
  { 
    id: 2, 
    type: 'image', 
    category: 'Sarana & Prasarana', 
    title: 'Perpustakaan Kampus', 
    url: 'https://picsum.photos/id/1073/1200/800', 
    desc: 'Fasilitas perpustakaan lengkap dengan ruang baca digital.',
    fullContent: 'Perpustakaan STT WPJ menyediakan ribuan koleksi buku teologi, jurnal, dan referensi umum. Dilengkapi dengan area baca yang nyaman (full AC) dan akses komputer untuk digital library (e-Lib). Mahasiswa dapat mengakses jurnal internasional seperti JSTOR dan EBSCO melalui jaringan kampus.',
    date: '15 Februari 2024'
  },
  { 
    id: 3, 
    type: 'image', 
    category: 'Sarana & Prasarana', 
    title: 'Kapel Kampus', 
    url: 'https://picsum.photos/id/1029/1200/800', 
    desc: 'Tempat ibadah rutin civitas akademika.',
    fullContent: 'Kapel ini menjadi jantung spiritualitas kampus. Setiap hari Senin dan Kamis, seluruh dosen, staf, dan mahasiswa berkumpul untuk ibadah raya. Kapel ini juga digunakan untuk kegiatan kerohanian mahasiswa, latihan paduan suara, dan seminar teologi.',
    date: '20 Maret 2024'
  },
  { 
    id: 4, 
    type: 'image', 
    category: 'Sarana & Prasarana', 
    title: 'Asrama Putra', 
    url: 'https://picsum.photos/id/1040/1200/800', 
    desc: 'Fasilitas tempat tinggal mahasiswa yang nyaman.',
    fullContent: 'Asrama Putra menyediakan hunian yang layak bagi mahasiswa yang berasal dari luar Jayapura. Dilengkapi dengan ruang belajar bersama, dapur umum, dan lapangan olahraga mini. Kehidupan asrama menekankan pada pembentukan karakter, disiplin, dan kemandirian.',
    date: '05 April 2024'
  },
  
  // Images - Kegiatan
  { 
    id: 5, 
    type: 'image', 
    category: 'Kegiatan Kampus', 
    title: 'Wisuda Angkatan XX', 
    url: 'https://picsum.photos/id/1059/1200/800', 
    desc: 'Momen kebahagiaan para wisudawan dan orang tua.',
    fullContent: 'Suasana haru dan bangga menyelimuti upacara Wisuda Angkatan XX. Sebanyak 150 wisudawan dari program S1 Teologi, S1 PAK, dan Pascasarjana dikukuhkan. Acara dihadiri oleh pejabat pemerintah daerah dan pimpinan sinode gereja-gereja mitra.',
    date: '15 November 2024'
  },
  { 
    id: 6, 
    type: 'image', 
    category: 'Kegiatan Kampus', 
    title: 'KKN di Wamena', 
    url: 'https://picsum.photos/id/1015/1200/800', 
    desc: 'Mahasiswa melayani masyarakat di daerah pedalaman.',
    fullContent: 'Mahasiswa semester akhir melaksanakan Kuliah Kerja Nyata (KKN) di daerah Wamena. Mereka terlibat dalam pembangunan saluran air bersih, mengajar di sekolah dasar, dan memberikan penyuluhan kesehatan serta kerohanian kepada masyarakat setempat.',
    date: 'Juli 2024'
  },
  { 
    id: 7, 
    type: 'image', 
    category: 'Kegiatan Kampus', 
    title: 'Natal Bersama', 
    url: 'https://picsum.photos/id/1060/1200/800', 
    desc: 'Perayaan Natal keluarga besar STT Walter Post.',
    fullContent: 'Perayaan Natal tahun ini mengangkat tema "Terang yang Membawa Harapan". Acara dimeriahkan oleh penampilan paduan suara mahasiswa, drama musikal, dan penyalaan lilin. Dihadiri oleh seluruh civitas akademika dan alumni.',
    date: '10 Desember 2024'
  },

  // Videos
  { 
    id: 8, 
    type: 'video', 
    category: 'Video Profil', 
    title: 'Profil Kampus STT Walter Post', 
    url: 'https://www.youtube.com/embed/lxRwEPvL-mQ', // Placeholder valid YT ID
    thumbnail: 'https://picsum.photos/id/1/800/600',
    desc: 'Mengenal lebih dekat visi dan misi kampus.',
    fullContent: 'Video profil resmi STT Walter Post Jayapura tahun 2024. Menampilkan fasilitas kampus, testimoni mahasiswa, profil dosen, dan visi misi institusi dalam mempersiapkan pemimpin gereja masa depan.',
    date: '01 Agustus 2024'
  },
  { 
    id: 9, 
    type: 'video', 
    category: 'Kegiatan', 
    title: 'Dokumentasi Retreat Mahasiswa', 
    url: 'https://www.youtube.com/embed/LXb3EKWsInQ', // Placeholder valid YT ID
    thumbnail: 'https://picsum.photos/id/2/800/600',
    desc: 'Keseruan dan pertumbuhan rohani selama retreat.',
    fullContent: 'Highlight kegiatan Retreat Mahasiswa Baru di Pantai Tablanusu. Kegiatan meliputi ibadah padang, games kebersamaan, dan sesi mentoring kelompok.',
    date: '20 September 2024'
  },
  
  // Audio
  { 
    id: 10, 
    type: 'audio', 
    category: 'Khotbah', 
    title: 'Pentingnya Integritas Pelayan Tuhan', 
    url: '#', // In a real app, this would be an MP3 file URL
    desc: 'Pdt. Dr. Yance Kogoya, M.Th - Ibadah Senin',
    fullContent: 'Rekaman khotbah Ibadah Senin Pembukaan Semester. Pdt. Dr. Yance Kogoya menekankan bahwa integritas adalah mata uang yang berlaku di mana saja bagi seorang hamba Tuhan. Tanpa integritas, pelayanan tidak akan berdampak maksimal.',
    date: '12 Agustus 2024'
  },
  { 
    id: 11, 
    type: 'audio', 
    category: 'Renungan', 
    title: 'Misi di Era Digital', 
    url: '#', 
    desc: 'Dr. Sarah Wenda - Renungan Pagi',
    fullContent: 'Renungan pagi ini membahas tantangan dan peluang pekabaran Injil melalui media sosial. Bagaimana gereja harus beradaptasi tanpa kehilangan esensi berita Injil itu sendiri.',
    date: '14 Agustus 2024'
  },
  { 
    id: 12, 
    type: 'audio', 
    category: 'Podcast', 
    title: 'Podcast Mahasiswa: Teologi & Budaya', 
    url: '#', 
    desc: 'Diskusi BEM STT WPJ Episode 1',
    fullContent: 'Episode perdana podcast BEM membahas isu kontekstualisasi teologi dalam budaya Papua. Menghadirkan narasumber mahasiswa senior dan dosen antropologi budaya.',
    date: '01 September 2024'
  },
];
