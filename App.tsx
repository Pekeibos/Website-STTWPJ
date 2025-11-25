import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';

// Profil Pages
import { ProfileHistory } from './pages/ProfileHistory';
import { ProfileVision } from './pages/ProfileVision';
import { ProfileValues } from './pages/ProfileValues';
import { ProfileAccreditation } from './pages/ProfileAccreditation';
import { ProfileStructure } from './pages/ProfileStructure';

// Prodi Pages
import { ProdiS1Teologi } from './pages/ProdiS1Teologi';
import { ProdiS1PAK } from './pages/ProdiS1PAK';
import { ProdiS2Teologi } from './pages/ProdiS2Teologi';
import { ProdiS2PAK } from './pages/ProdiS2PAK';
import { AcademicFacilities } from './pages/AcademicFacilities';

// Dosen Pages
import { LecturersList } from './pages/LecturersList';
import { LecturerDetail } from './pages/LecturerDetail'; // Imported Detail Page
import { StaffList } from './pages/StaffList';

// Alumni & Mahasiswa Pages
import { StudentOrg } from './pages/StudentOrg';
import { StudentActivities } from './pages/StudentActivities';
import { AlumniProfile } from './pages/AlumniProfile';
import { TracerStudy } from './pages/TracerStudy';

// Layanan Pages
import { Admissions } from './pages/Admissions'; // PMB
import { SiAkad } from './pages/SiAkad';
import { ELearning } from './pages/ELearning';
import { ELibrary } from './pages/ELibrary';
import { EJournal } from './pages/EJournal';

// Berita Pages
import { NewsList } from './pages/NewsList';
import { Articles } from './pages/Articles';
import { Information } from './pages/Information';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Profil Routes */}
          <Route path="/profil/sejarah" element={<ProfileHistory />} />
          <Route path="/profil/visi-misi" element={<ProfileVision />} />
          <Route path="/profil/nilai" element={<ProfileValues />} />
          <Route path="/profil/akreditasi" element={<ProfileAccreditation />} />
          <Route path="/profil/struktur" element={<ProfileStructure />} />

          {/* Program Studi Routes */}
          <Route path="/program-studi/s1-teologi" element={<ProdiS1Teologi />} />
          <Route path="/program-studi/s1-pak" element={<ProdiS1PAK />} />
          <Route path="/program-studi/s2-teologi" element={<ProdiS2Teologi />} />
          <Route path="/program-studi/s2-pak" element={<ProdiS2PAK />} />
          <Route path="/program-studi/fasilitas" element={<AcademicFacilities />} />

          {/* Dosen Routes */}
          <Route path="/dosen/pendidik" element={<LecturersList />} />
          <Route path="/dosen/:id" element={<LecturerDetail />} /> {/* New Route */}
          <Route path="/dosen/staf" element={<StaffList />} />

          {/* Alumni & Mahasiswa Routes */}
          <Route path="/mahasiswa/organisasi" element={<StudentOrg />} />
          <Route path="/mahasiswa/kegiatan" element={<StudentActivities />} />
          <Route path="/alumni/profil" element={<AlumniProfile />} />
          <Route path="/alumni/tracer-study" element={<TracerStudy />} />

          {/* Layanan Routes */}
          <Route path="/layanan/pmb" element={<Admissions />} />
          <Route path="/layanan/siakad" element={<SiAkad />} />
          <Route path="/layanan/elearning" element={<ELearning />} />
          <Route path="/layanan/elibrary" element={<ELibrary />} />
          <Route path="/layanan/ejurnal" element={<EJournal />} />

          {/* Berita Routes */}
          <Route path="/berita/terkini" element={<NewsList />} />
          <Route path="/berita/artikel" element={<Articles />} />
          <Route path="/berita/informasi" element={<Information />} />
          
          <Route path="/kontak" element={<Contact />} />
          
          {/* Catch all */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;