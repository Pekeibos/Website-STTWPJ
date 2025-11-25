import React from 'react';
import { Section, SectionTitle } from '../components/UI';
import { User } from 'lucide-react';

const staff = [
  { id: 1, name: "John Kogoya, S.E", role: "Kepala Tata Usaha", department: "Administrasi Umum" },
  { id: 2, name: "Martha Wenda, S.Kom", role: "Staf IT & SiAkad", department: "Pusat Data & Informasi" },
  { id: 3, name: "Petrus Tabuni", role: "Kepala Perpustakaan", department: "Perpustakaan" },
  { id: 4, name: "Lydia Enumbi, S.Ak", role: "Staf Keuangan", department: "Keuangan" },
  { id: 5, name: "Markus Yoman", role: "Staf Rumah Tangga", department: "Umum & Sarpras" },
];

export const StaffList: React.FC = () => {
  return (
    <>
      <div className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Staf Kependidikan</h1>
          <p className="text-xl text-blue-200">Mendukung operasional akademik dan pelayanan kampus.</p>
        </div>
      </div>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staff.map((s) => (
                <div key={s.id} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-accent flex items-center gap-4 hover:-translate-y-1 transition-transform">
                    <div className="bg-gray-100 p-3 rounded-full text-gray-500">
                        <User size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-gray-900">{s.name}</h4>
                        <p className="text-primary font-semibold text-sm">{s.role}</p>
                        <p className="text-gray-500 text-xs mt-1">{s.department}</p>
                    </div>
                </div>
            ))}
        </div>
      </Section>
    </>
  );
};