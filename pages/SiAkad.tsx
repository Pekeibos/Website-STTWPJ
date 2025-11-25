import React from 'react';
import { Button } from '../components/UI';

export const SiAkad: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full text-center">
         <h1 className="text-3xl font-bold font-serif text-primary mb-2">SiAkad</h1>
         <p className="text-gray-500 mb-8">Sistem Informasi Akademik STT Walter Post</p>
         
         <div className="space-y-4 text-left">
             <div>
                 <label className="block text-sm font-medium text-gray-700">Username / NIM</label>
                 <input type="text" className="w-full mt-1 px-4 py-2 border rounded-lg" placeholder="Masukkan NIM" />
             </div>
             <div>
                 <label className="block text-sm font-medium text-gray-700">Password</label>
                 <input type="password" className="w-full mt-1 px-4 py-2 border rounded-lg" placeholder="********" />
             </div>
             <Button className="w-full">Login Mahasiswa</Button>
             <div className="text-center text-sm text-blue-600 cursor-pointer hover:underline">Lupa Password?</div>
         </div>
      </div>
    </div>
  );
};