
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Section, Button } from '../components/UI';
import { ChevronLeft, Mail, Linkedin, BookOpen, GraduationCap, Award, FileText, Book, User } from 'lucide-react';
import { lecturersData } from '../data/lecturers';

export const LecturerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const lecturer = lecturersData.find(l => l.id === Number(id));

  if (!lecturer) {
    return <Navigate to="/dosen/pendidik" replace />;
  }

  return (
    <>
      {/* Header Profile Hero */}
      <div className="bg-primary dark:bg-gray-900 text-white pt-28 pb-16 relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/dosen/pendidik" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors group">
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Kembali ke Daftar Dosen
          </Link>
          
          <div className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-12">
             {/* Profile Image with Ring */}
             <div className="relative shrink-0">
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-[6px] border-white dark:border-gray-800 shadow-2xl overflow-hidden bg-gray-800 relative z-10">
                   <img src={lecturer.image} alt={lecturer.name} className="w-full h-full object-cover" />
                </div>
                {/* Decorative Elements */}
                <div className="absolute bottom-2 right-2 md:bottom-5 md:right-5 bg-accent p-2.5 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-20">
                   <Award className="text-white w-6 h-6 md:w-7 md:h-7" />
                </div>
             </div>
             
             {/* Name & Basic Info */}
             <div className="text-center md:text-left pb-2 flex-grow">
                <span className="bg-blue-800/80 dark:bg-blue-900/50 text-blue-100 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block backdrop-blur-sm border border-blue-700/50">
                  {lecturer.prodi}
                </span>
                <h1 className="text-3xl md:text-5xl font-serif font-bold mb-2 leading-tight">{lecturer.name}</h1>
                <p className="text-xl text-blue-200 font-medium mb-6 flex flex-col md:flex-row items-center md:items-start gap-2">
                    <span>{lecturer.role}</span>
                    <span className="hidden md:inline text-blue-400">•</span>
                    <span className="text-white/80">{lecturer.title}</span>
                </p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                   <a 
                     href={`mailto:${lecturer.email}`} 
                     className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors border border-white/20 backdrop-blur-sm"
                   >
                     <Mail size={18} /> Hubungi Email
                   </a>
                   <a 
                     href={lecturer.linkedin} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="flex items-center gap-2 bg-[#0077b5] hover:bg-[#006097] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-lg"
                   >
                     <Linkedin size={18} /> LinkedIn
                   </a>
                </div>
             </div>
          </div>
        </div>
      </div>

      <Section className="bg-gray-50 dark:bg-gray-950 min-h-screen">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Main Content Column (Left) */}
            <div className="lg:col-span-8 space-y-8">
               
               {/* Biography Card */}
               <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                  <h3 className="text-2xl font-bold font-serif text-gray-900 dark:text-white mb-6 flex items-center gap-3 border-b border-gray-100 dark:border-gray-800 pb-4">
                     <span className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center text-primary dark:text-blue-400"><User size={22} /></span>
                     Biografi Singkat
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                     {lecturer.biography || "Belum ada biografi yang ditambahkan."}
                  </p>
               </div>

               {/* Publications Card */}
               <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                  <h3 className="text-2xl font-bold font-serif text-gray-900 dark:text-white mb-6 flex items-center gap-3 border-b border-gray-100 dark:border-gray-800 pb-4">
                     <span className="w-10 h-10 bg-accent/10 dark:bg-accent/20 rounded-lg flex items-center justify-center text-accent"><FileText size={22} /></span>
                     Publikasi & Karya Ilmiah
                  </h3>
                  {lecturer.publications && lecturer.publications.length > 0 ? (
                     <ul className="space-y-4">
                        {lecturer.publications.map((pub, idx) => (
                           <li key={idx} className="flex gap-4 items-start p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700">
                              <div className="min-w-[28px] h-[28px] rounded-full bg-accent/10 text-accent font-bold flex items-center justify-center text-sm">{idx + 1}</div>
                              <span className="text-gray-700 dark:text-gray-300 font-medium leading-snug">{pub}</span>
                           </li>
                        ))}
                     </ul>
                  ) : (
                     <p className="text-gray-500 italic">Belum ada data publikasi.</p>
                  )}
               </div>

                {/* Courses Taught */}
                <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                  <h3 className="text-2xl font-bold font-serif text-gray-900 dark:text-white mb-6 flex items-center gap-3 border-b border-gray-100 dark:border-gray-800 pb-4">
                     <span className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400"><Book size={22} /></span>
                     Mata Kuliah Diampu
                  </h3>
                  {lecturer.courses && lecturer.courses.length > 0 ? (
                      <div className="flex flex-wrap gap-3">
                          {lecturer.courses.map((course, idx) => (
                              <span key={idx} className="px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg text-sm font-semibold border border-green-100 dark:border-green-800">
                                  {course}
                              </span>
                          ))}
                      </div>
                  ) : (
                      <p className="text-gray-500 italic">Data mata kuliah belum tersedia.</p>
                  )}
               </div>

            </div>

            {/* Sidebar (Right) */}
            <div className="lg:col-span-4 space-y-8">
               
               {/* Education Timeline */}
               <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border-t-4 border-primary dark:border-blue-500">
                  <h3 className="text-xl font-bold font-serif text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                     <GraduationCap className="text-primary dark:text-blue-400" size={24} /> Riwayat Pendidikan
                  </h3>
                  <div className="space-y-8 relative pl-2">
                     {/* Vertical Line */}
                     <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                     
                     {lecturer.education && lecturer.education.map((edu, idx) => (
                        <div key={idx} className="relative pl-8 group">
                           {/* Dot */}
                           <div className="absolute left-0 top-1.5 w-6 h-6 bg-white dark:bg-gray-800 border-4 border-primary dark:border-blue-500 rounded-full z-10 group-hover:scale-110 transition-transform"></div>
                           
                           <h4 className="text-gray-900 dark:text-white font-bold leading-tight">{edu.split(',')[0]}</h4>
                           <p className="text-primary dark:text-blue-400 text-sm font-medium mt-1">{edu.split(',')[1]}</p>
                           <p className="text-gray-400 text-xs mt-1">{edu.split('(')[1]?.replace(')', '') || ''}</p>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Expertise Tags */}
               <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800">
                  <h3 className="text-lg font-bold font-serif text-gray-900 dark:text-white mb-4">Bidang Keahlian</h3>
                  <div className="flex flex-wrap gap-2">
                     {lecturer.expertise.split(',').map((skill, idx) => (
                        <span key={idx} className="bg-blue-50 dark:bg-blue-900/20 text-primary dark:text-blue-400 px-3 py-1.5 rounded-md text-sm font-semibold border border-blue-100 dark:border-blue-800">
                           {skill.trim()}
                        </span>
                     ))}
                  </div>
               </div>

               {/* Contact CTA */}
               <div className="bg-gradient-to-br from-secondary to-red-900 text-white p-6 rounded-2xl shadow-lg text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                  <h3 className="font-bold text-lg mb-2 relative z-10">Ingin Diskusi Akademik?</h3>
                  <p className="text-red-100 text-sm mb-6 relative z-10">Silakan hubungi dosen bersangkutan melalui email untuk janji temu atau konsultasi skripsi.</p>
                  <Button variant="white" className="w-full text-sm shadow-md" onClick={() => window.location.href = `mailto:${lecturer.email}`}>
                     Kirim Email Sekarang
                  </Button>
               </div>

            </div>
         </div>
      </Section>
    </>
  );
};
