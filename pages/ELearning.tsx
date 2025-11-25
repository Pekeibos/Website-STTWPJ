import React from 'react';
import { Button } from '../components/UI';
import { BookOpen } from 'lucide-react';

export const ELearning: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center p-4">
      <div className="bg-white p-10 rounded-xl shadow-2xl max-w-lg w-full text-center">
         <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
             <BookOpen size={32} />
         </div>
         <h1 className="text-3xl font-bold font-serif text-gray-900 mb-2">E-Learning Portal</h1>
         <p className="text-gray-500 mb-8">Pembelajaran Jarak Jauh STT Walter Post Jayapura</p>
         
         <div className="space-y-4">
             <Button className="w-full" variant="primary">Masuk dengan Akun Kampus</Button>
             <Button className="w-full" variant="outline">Panduan Penggunaan</Button>
         </div>
         
         <div className="mt-8 border-t pt-6 text-xs text-gray-400">
             &copy; 2024 STT Walter Post Jayapura
         </div>
      </div>
    </div>
  );
};