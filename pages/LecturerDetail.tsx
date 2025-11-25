import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Section, Button } from '../components/UI';
import { ChevronLeft, Mail, Linkedin, BookOpen, GraduationCap, Award, FileText } from 'lucide-react';
import { lecturersData } from '../data/lecturers';

export const LecturerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const lecturer = lecturersData.find(l => l.id === Number(id));

  if (!lecturer) {
    return <Navigate to="/dosen/pendidik" replace />;
  }

  return (
    <>
      {/* Header Profile */}
      <div className="bg-primary text-white pt-24 pb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/dosen/pendidik" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors">
            <ChevronLeft size={20} /> Kembali ke Daftar Dosen
          </Link>
          
          <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
             <div className="relative">
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gray-800">
                   <img src={lecturer.image} alt={lecturer.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-accent p-2 rounded-full border-2 border-white shadow-lg">
                   <Award className="text-white w-6 h-6" />
                </div>
             </div>
             
             <div className="text-center md:text-left pb-4 flex-grow">
                <span className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                  {lecturer.prodi}
                </span>
                <h1 className="text-3xl md:text-5xl font-serif font-bold mb-2">{lecturer.name}</h1>
                <p className="text-xl text-blue-200 font-medium mb-4">{lecturer.role}</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                   <a 
                     href={`mailto:${lecturer.email}`} 
                     className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm transition-colors border border-white/10"
                   >
                     <Mail size={16} /> {lecturer.email}
                   </a>
                   <a 
                     href={lecturer.linkedin} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="flex items-center gap-2 bg-[#0077b5]/80 hover:bg-[#0077b5] px-4 py-2 rounded-lg text-sm transition-colors shadow-sm"
                   >
                     <Linkedin size={16} /> LinkedIn Profile
                   </a>
                </div>
             </div>
          </div>
        </div>
      </div>

      <Section className="bg-gray-50">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
               
               {/* Biography */}
               <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-bold font-serif text-gray-900 mb-4 flex items-center gap-2">
                     <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary"><BookOpen size={20} /></span>
                     Biografi Singkat
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                     {lecturer.biography || "Belum ada biografi yang ditambahkan."}
                  </p>
               </div>

               {/* Publications */}
               <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-bold font-serif text-gray-900 mb-6 flex items-center gap-2">
                     <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center text-accent"><FileText size={20} /></span>
                     Publikasi & Karya Ilmiah
                  </h3>
                  {lecturer.publications && lecturer.publications.length > 0 ? (
                     <ul className="space-y-4">
                        {lecturer.publications.map((pub, idx) => (
                           <li key={idx} className="flex gap-4 items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                              <div className="min-w-[24px] pt-1 text-accent font-bold">{idx + 1}.</div>
                              <span className="text-gray-700 font-medium">{pub}</span>
                           </li>
                        ))}
                     </ul>
                  ) : (
                     <p className="text-gray-500 italic">Belum ada data publikasi.</p>
                  )}
               </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-8">
               
               {/* Education */}
               <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-primary">
                  <h3 className="text-xl font-bold font-serif text-gray-900 mb-6 flex items-center gap-2">
                     <GraduationCap className="text-primary" /> Riwayat Pendidikan
                  </h3>
                  <div className="space-y-6 relative">
                     <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-gray-200"></div>
                     {lecturer.education && lecturer.education.map((edu, idx) => (
                        <div key={idx} className="relative pl-10">
                           <div className="absolute left-2 top-2 w-3 h-3 bg-white border-2 border-primary rounded-full z-10"></div>
                           <p className="text-gray-800 font-medium">{edu.split(',')[0]}</p>
                           <p className="text-gray-500 text-sm">{edu.split(',')[1]}</p>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Expertise Tags */}
               <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-lg font-bold font-serif text-gray-900 mb-4">Bidang Keahlian</h3>
                  <div className="flex flex-wrap gap-2">
                     {lecturer.expertise.split(',').map((skill, idx) => (
                        <span key={idx} className="bg-blue-50 text-primary px-3 py-1 rounded-full text-sm font-semibold border border-blue-100">
                           {skill.trim()}
                        </span>
                     ))}
                  </div>
               </div>

               {/* Contact CTA */}
               <div className="bg-secondary text-white p-6 rounded-xl shadow-lg text-center">
                  <h3 className="font-bold text-lg mb-2">Ingin Diskusi Akademik?</h3>
                  <p className="text-red-100 text-sm mb-4">Silakan hubungi dosen bersangkutan melalui email untuk janji temu.</p>
                  <Button variant="white" className="w-full text-sm" onClick={() => window.location.href = `mailto:${lecturer.email}`}>
                     Kirim Email
                  </Button>
               </div>

            </div>
         </div>
      </Section>
    </>
  );
};