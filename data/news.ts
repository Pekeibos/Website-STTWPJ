
import { NewsItem } from '../types';

export interface NewsDetail extends NewsItem {
  content: string; // HTML string or Markdown
  author?: string;
  tags?: string[];
}

export const newsData: NewsDetail[] = [
  {
    id: 1,
    title: "Ibadah Pembukaan Semester Ganjil 2024",
    date: "12 Agustus 2024",
    category: "Kampus",
    image: "https://picsum.photos/seed/worship/800/500",
    excerpt: "Seluruh civitas akademika STT Walter Post mengikuti ibadah syukur mengawali tahun ajaran baru dengan penuh sukacita.",
    content: `
      <p><strong>JAYAPURA, STT WPJ</strong> - Sekolah Tinggi Teologi Walter Post Jayapura menggelar Ibadah Pembukaan Semester Ganjil Tahun Akademik 2024/2025 pada hari Senin, 12 Agustus 2024. Ibadah yang berlangsung di Kapel Utama Kampus ini dihadiri oleh seluruh dosen, staf, dan mahasiswa.</p>
      
      <p>Ibadah dipimpin oleh Ketua STT, Pdt. Dr. Yance Kogoya, M.Th. Dalam khotbahnya yang terambil dari Kitab Yosua 1:1-9, beliau menekankan pentingnya "Kuatkan dan Teguhkanlah Hatimu" dalam menghadapi tantangan studi dan pelayanan di era modern.</p>
      
      <p>"Tahun ajaran baru adalah lembaran baru. Mahasiswa harus memiliki mentalitas pejuang, tidak mudah menyerah, dan selalu mengandalkan Tuhan dalam setiap proses akademik," ujar Pdt. Yance dalam khotbahnya.</p>
      
      <p>Acara juga diisi dengan perkenalan dosen baru dan penyampaian kalender akademik oleh Wakil Ketua I Bidang Akademik. Suasana kebersamaan sangat terasa saat seluruh civitas akademika menyanyikan Mars STT WPJ di akhir ibadah.</p>
      
      <p>Kegiatan ditutup dengan ramah tamah dan makan siang bersama di halaman kampus, menandakan dimulainya aktivitas perkuliahan minggu ini.</p>
    `,
    author: "Humas STT WPJ",
    tags: ["Ibadah", "Akademik", "Mahasiswa"]
  },
  {
    id: 2,
    title: "Seminar Misi: Injil di Tanah Papua",
    date: "05 September 2024",
    category: "Seminar",
    image: "https://picsum.photos/seed/seminar/800/500",
    excerpt: "Menghadirkan pembicara internasional untuk membahas strategi pekabaran Injil di era modern.",
    content: `
      <p>STT Walter Post Jayapura kembali menyelenggarakan Seminar Misi Internasional dengan tema "Injil yang Mengakar: Strategi Misi di Tanah Papua pada Era 5.0". Seminar ini menghadirkan pembicara utama Dr. John Smith dari Fuller Theological Seminary dan Pdt. Marthen Tabuni, M.Miss dari STT WPJ.</p>
      
      <p>Seminar ini menyoroti pergeseran paradigma misi dari sekadar menjangkau menjadi memberdayakan. Tantangan misi di Papua hari ini bukan lagi soal akses geografis semata, melainkan bagaimana Injil menjawab tantangan sosial, ekonomi, dan budaya masyarakat.</p>
      
      <h3>Poin Penting Seminar:</h3>
      <ul>
        <li>Pentingnya pendekatan antropologis dalam pekabaran Injil.</li>
        <li>Pemanfaatan teknologi digital untuk menjangkau generasi muda Papua.</li>
        <li>Misi holistik yang menyentuh aspek pendidikan dan kesehatan.</li>
      </ul>
      
      <p>Acara dihadiri oleh lebih dari 300 peserta yang terdiri dari mahasiswa teologi, pendeta, dan aktivis misi dari berbagai denominasi gereja di Jayapura dan sekitarnya.</p>
    `,
    author: "Panitia Seminar",
    tags: ["Misi", "Seminar", "Papua"]
  },
  {
    id: 3,
    title: "Relevansi Teologi Reformed di Abad 21",
    date: "10 Agustus 2024",
    category: "Artikel Teologi",
    image: "https://picsum.photos/seed/book/800/500",
    excerpt: "Sebuah tinjauan teologis mengenai pentingnya kembali kepada dasar-dasar iman Kristen di tengah gempuran postmodernisme.",
    content: `
      <p>Di tengah arus postmodernisme yang menekankan relativisme kebenaran, Teologi Reformed hadir menawarkan landasan iman yang kokoh. Doktrin <em>Sola Scriptura</em> (Hanya Alkitab) menjadi sangat relevan ketika kebenaran objektif mulai dipertanyakan.</p>
      
      <p>Artikel ini membahas bagaimana prinsip-prinsip kedaulatan Allah, kerusakan total manusia, dan anugerah yang tak tertahankan dapat diaplikasikan dalam konteks pelayanan masa kini. Bukan sebagai dogma yang kaku, melainkan sebagai kacamata untuk melihat dunia (worldview).</p>
      
      <p>Teologi Reformed mengajarkan kita untuk:</p>
      <ol>
        <li>Melihat segala sesuatu, termasuk budaya dan sains, di bawah kedaulatan Allah.</li>
        <li>Menyadari keterbatasan rasio manusia tanpa iluminasi Roh Kudus.</li>
        <li>Hidup bagi kemuliaan Allah (Soli Deo Gloria) dalam setiap aspek profesi.</li>
      </ol>
      
      <p>Bagi mahasiswa teologi STT WPJ, memahami akar teologi ini penting agar tidak terombang-ambing oleh rupa-rupa angin pengajaran yang menyesatkan.</p>
    `,
    author: "Pdt. Simon Wanimbo, M.Th",
    tags: ["Teologi", "Artikel", "Reformed"]
  },
  {
    id: 4,
    title: "Kalender Akademik 2024/2025",
    date: "01 Juli 2024",
    category: "Informasi",
    image: "https://picsum.photos/seed/cal/800/500",
    excerpt: "Jadwal lengkap kegiatan akademik semester ganjil dan genap tahun ajaran 2024/2025.",
    content: `
      <p>Biro Administrasi Akademik (BAA) STT Walter Post Jayapura resmi merilis Kalender Akademik untuk Tahun Ajaran 2024/2025. Berikut adalah tanggal-tanggal penting yang wajib diperhatikan oleh seluruh mahasiswa:</p>
      
      <h3>Semester Ganjil</h3>
      <ul>
        <li><strong>Pengisian KRS:</strong> 1 - 10 Agustus 2024</li>
        <li><strong>Awal Perkuliahan:</strong> 15 Agustus 2024</li>
        <li><strong>Ujian Tengah Semester (UTS):</strong> 10 - 15 Oktober 2024</li>
        <li><strong>Ujian Akhir Semester (UAS):</strong> 10 - 20 Desember 2024</li>
      </ul>
      
      <h3>Semester Genap</h3>
      <ul>
        <li><strong>Pengisian KRS:</strong> 20 - 30 Januari 2025</li>
        <li><strong>Awal Perkuliahan:</strong> 05 Februari 2025</li>
        <li><strong>Ujian Tengah Semester (UTS):</strong> 01 - 07 April 2025</li>
        <li><strong>Ujian Akhir Semester (UAS):</strong> 15 - 25 Juni 2025</li>
      </ul>
      
      <p>Mahasiswa diharapkan menyelesaikan administrasi keuangan sebelum masa pengisian KRS. Jadwal dapat berubah sewaktu-waktu menyesuaikan kondisi dan kebijakan kampus.</p>
    `,
    author: "BAA STT WPJ",
    tags: ["Akademik", "Jadwal", "Pengumuman"]
  },
   {
    id: 5,
    title: "Penerimaan Mahasiswa Baru Gelombang II",
    date: "20 September 2024",
    category: "Akademik",
    image: "https://picsum.photos/seed/students/800/500",
    excerpt: "Pendaftaran gelombang kedua telah dibuka. Segera daftarkan diri Anda sebelum kuota terpenuhi.",
    content: `
      <p>Kabar gembira bagi calon mahasiswa yang belum sempat mendaftar pada gelombang pertama. Panitia Penerimaan Mahasiswa Baru (PMB) STT Walter Post Jayapura membuka pendaftaran Gelombang II.</p>
      <p>Pendaftaran dibuka mulai tanggal 20 September hingga 20 Oktober 2024. Tes seleksi akan dilaksanakan pada tanggal 25 Oktober 2024.</p>
      <p>Segera persiapkan berkas-berkas yang diperlukan dan daftarkan diri Anda secara online melalui website ini atau datang langsung ke kampus.</p>
    `,
    author: "Panitia PMB",
    tags: ["PMB", "Info"]
  },
  {
    id: 6,
    title: "Pendidikan Kristen dalam Era Digital",
    date: "22 Juli 2024",
    category: "Artikel Pendidikan",
    image: "https://picsum.photos/seed/tech/800/500",
    excerpt: "Tantangan dan peluang bagi pendidik Kristen untuk memanfaatkan teknologi dalam pengajaran iman.",
    content: `
      <p>Era digital membawa perubahan signifikan dalam cara peserta didik menerima informasi. Guru Pendidikan Agama Kristen (PAK) tidak boleh menutup mata terhadap fenomena ini.</p>
      <p>Artikel ini mengulas berbagai metode pembelajaran berbasis teknologi, seperti penggunaan aplikasi Alkitab interaktif, gamifikasi dalam sekolah minggu, dan platform e-learning.</p>
      <p>Namun, teknologi hanyalah alat. Inti dari pendidikan Kristen tetaplah keteladanan dan transfer nilai-nilai Kerajaan Allah yang dilakukan melalui hubungan personal antara pendidik dan peserta didik.</p>
    `,
    author: "Dr. Sarah Wenda",
    tags: ["Pendidikan", "Digital", "Artikel"]
  },
    {
    id: 7,
    title: "Jadwal Ujian Akhir Semester Ganjil",
    date: "15 November 2024",
    category: "Informasi",
    image: "https://picsum.photos/seed/exam/800/500",
    excerpt: "Informasi jadwal UAS bagi mahasiswa tingkat I - IV. Harap memperhatikan syarat administrasi.",
    content: `
      <p>Diberitahukan kepada seluruh mahasiswa STT WPJ bahwa Ujian Akhir Semester (UAS) Ganjil TA 2024/2025 akan dilaksanakan pada tanggal 10-20 Desember 2024.</p>
      <p>Syarat mengikuti ujian:</p>
      <ol>
        <li>Melunasi SPP Semester Ganjil.</li>
        <li>Kehadiran kuliah minimal 75%.</li>
        <li>Membawa Kartu Ujian yang dicetak melalui SiAkad.</li>
      </ol>
      <p>Jadwal mata kuliah yang diujikan dapat dilihat pada papan pengumuman prodi masing-masing atau melalui portal SiAkad.</p>
    `,
    author: "BAA",
    tags: ["Ujian", "Akademik"]
  }
];
