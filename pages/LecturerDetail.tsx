import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Section, Button } from '../components/UI';
import { ChevronLeft, Mail, Linkedin, BookOpen, GraduationCap, Award, FileText, User, ArrowRight } from 'lucide-react';
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
      <div className="bg-primary dark:bg-gray-900 text-white pt-28 pb-20 relative overflow-hidden transition-colors duration-300">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/dosen/pendidik" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors group font-medium">
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Kembali ke Daftar Dosen
          </Link>
          
          <div className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-12">
             {/* Profile Image with Ring */}
             <div className="relative shrink-0">
                <div className="w-48 h-56 md:w-64 md:h-72 rounded-xl border-[6px] border-white dark:border-gray-800 shadow-2xl overflow-hidden bg-gray-800 relative z-10">
                   <img src={lecturer.image} alt={lecturer.name} className="w-full h-full object-cover" />
                </div>
                {/* Decorative Icon */}
                <div className="absolute -bottom-4 -right-4 bg-accent p-3 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-20">
                   <Award className="text-white w-8 h-8" />
                </div>
             </div>
             
             {/* Name & Basic Info */}
             <div className="text-center md:text-left pb-2 flex-grow w-full">
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                    <span className="bg-blue-800/80 dark:bg-blue-900/50 text-blue-100 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-blue-700/50">
                    {lecturer.prodi}
                    </span>
                    <span className="bg-white/10 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/20">
                    {lecturer.role}
                    </span>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-serif font-bold mb-3 leading-tight text-white">{lecturer.name}</h1>
                <p className="text-xl text-blue-200 font-medium mb-8 flex flex-col md:flex-row items-center md:items-start gap-2">
                    <span className="text-white/90">{lecturer.title}</span>
                </p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                   <a 
                     href={`mailto:${lecturer.email}`} 
                     className="flex items-center gap-2 bg-white text-primary hover:bg-blue-50 px-6 py-3 rounded-lg text-sm font-bold transition-colors shadow-lg"
                   >
                     <Mail size={18} /> Hubungi Email
                   </a>
                   <a 
                     href={lecturer.linkedin} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="flex items-center gap-2 bg-[#0077b5] hover:bg-[#006097] text-white px-6 py-3 rounded-lg text-sm font-bold transition-colors shadow-lg"
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
                     Biografi
                  </h3>
                  <div className="prose prose-lg dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed">
                     <p>{lecturer.biography || "Belum ada biografi yang ditambahkan."}</p>
                  </div>
               </div>

               {/* Publications Card */}
               <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                  <h3 className="text-2xl font-bold font-serif text-gray-900 dark:text-white mb-6 flex items-center gap-3 border-b border-gray-100 dark:border-gray-800 pb-4">
                     <span className="w-10 h-10 bg-accent/10 dark:bg-accent/20 rounded-lg flex items-center justify-center text-accent"><FileText size={22} /></span>
                     Publikasi & Karya Ilmiah
                  </h3>
                  {lecturer.publications && lecturer.publications.length > 0 ? (
                     <div className="space-y-4">
                        {lecturer.publications.map((pub, idx) => (
                           <div key={idx} className="flex gap-4 items-start p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700 group">
                              <div className="min-w-[32px] h-[32px] rounded-full bg-white dark:bg-gray-700 text-accent font-bold flex items-center justify-center text-sm shadow-sm border border-gray-100 dark:border-gray-600 group-hover:bg-accent group-hover:text-white transition-colors">{idx + 1}</div>
                              <span className="text-gray-800 dark:text-gray-200 font-medium leading-snug pt-1">{pub}</span>
                           </div>
                        ))}
                     </div>
                  ) : (
                     <p className="text-gray-500 italic p-4 bg-gray-50 rounded-lg text-center">Belum ada data publikasi yang terdaftar.</p>
                  )}
               </div>

                {/* Courses Taught */}
                <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                  <h3 className="text-2xl font-bold font-serif text-gray-900 dark:text-white mb-6 flex items-center gap-3 border-b border-gray-100 dark:border-gray-800 pb-4">
                     <span className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400"><BookOpen size={22} /></span>
                     Mata Kuliah Diampu
                  </h3>
                  {lecturer.courses && lecturer.courses.length > 0 ? (
                      <div className="flex flex-wrap gap-3">
                          {lecturer.courses.map((course, idx) => (
                              <span key={idx} className="px-5 py-2.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg text-sm font-semibold border border-green-100 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors cursor-default flex items-center gap-2">
                                  <BookOpen size={14} className="opacity-50" /> {course}
                              </span>
                          ))}
                      </div>
                  ) : (
                      <p className="text-gray-500 italic p-4 bg-gray-50 rounded-lg text-center">Data mata kuliah belum tersedia.</p>
                  )}
               </div>

            </div>

            {/* Sidebar (Right) */}
            <div className="lg:col-span-4 space-y-8">
               
               {/* Education Timeline */}
               <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border-t-4 border-primary dark:border-blue-500 sticky top-24">
                  <h3 className="text-xl font-bold font-serif text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                     <GraduationCap className="text-primary dark:text-blue-400" size={24} /> Riwayat Pendidikan
                  </h3>
                  <div className="space-y-8 relative pl-2">
                     {/* Vertical Line */}
                     <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                     
                     {lecturer.education && lecturer.education.map((edu, idx) => {
                        // Simple parser assuming format "Degree Major, Institution (Year)"
                        const parts = edu.split(',');
                        const degree = parts[0];
                        const rest = parts.slice(1).join(',');
                        
                        return (
                          <div key={idx} className="relative pl-8 group">
                             {/* Dot */}
                             <div className="absolute left-0 top-1.5 w-6 h-6 bg-white dark:bg-gray-800 border-4 border-primary dark:border-blue-500 rounded-full z-10 group-hover:scale-110 transition-transform shadow-sm"></div>
                             
                             <h4 className="text-gray-900 dark:text-white font-bold leading-tight text-base">{degree}</h4>
                             <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 leading-snug">{rest}</p>
                          </div>
                        );
                     })}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide">Bidang Keahlian</h4>
                      <div className="flex flex-wrap gap-2">
                        {lecturer.expertise.split(',').map((skill, idx) => (
                            <span key={idx} className="bg-blue-50 dark:bg-blue-900/20 text-primary dark:text-blue-400 px-3 py-1.5 rounded-md text-xs font-bold border border-blue-100 dark:border-blue-800">
                            {skill.trim()}
                            </span>
                        ))}
                      </div>
                  </div>
               </div>

               {/* Contact CTA */}
               <div className="bg-gradient-to-br from-secondary to-red-900 text-white p-8 rounded-2xl shadow-xl text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <h3 className="font-bold text-xl mb-3 relative z-10 font-serif">Ingin Diskusi Akademik?</h3>
                  <p className="text-red-100 text-sm mb-8 relative z-10 leading-relaxed">
                    Silakan hubungi dosen bersangkutan melalui email resmi untuk keperluan bimbingan, penelitian, atau konsultasi akademik.
                  </p>
                  <Button variant="white" className="w-full text-sm shadow-lg font-bold py-3" onClick={() => window.location.href = `mailto:${lecturer.email}`}>
                     Kirim Email Sekarang
                  </Button>
               </div>

            </div>
         </div>
      </Section>
    </>
  );
};
