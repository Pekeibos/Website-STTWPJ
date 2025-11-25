import React from 'react';
import { Section, SectionTitle, Button } from '../components/UI';
import { MapPin, Phone, Mail, Clock, Send, Map } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <>
      <Section className="bg-gray-50 pt-32">
        <SectionTitle title="Hubungi Kami" centered subtitle="Kami siap melayani pertanyaan Anda seputar akademik dan pelayanan kampus." />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                 <h3 className="font-serif font-bold text-xl mb-6 text-primary">Informasi Kontak</h3>
                 
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg text-primary">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-1">Alamat Kampus</h4>
                            <p className="text-gray-600">Jln. Pos 7 Sentani, Jayapura<br/>Papua, Indonesia 99352</p>
                            <a 
                                href="https://maps.app.goo.gl/zQFYsABnFTGJDQGE7" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-accent font-bold text-sm mt-3 hover:underline"
                            >
                                <Map size={16} /> Buka di Google Maps
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">Telepon / WhatsApp</h4>
                        <p className="text-gray-600">+62 967 1234567 (Kantor)</p>
                        <p className="text-gray-600">+62 812 3456 7890 (Humas)</p>
                    </div>
                    </div>

                    <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">Email</h4>
                        <p className="text-gray-600">kontak@sttwpj.ac.id</p>
                        <p className="text-gray-600">pmb@sttwalterpost.ac.id</p>
                    </div>
                    </div>

                    <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                        <Clock size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">Jam Operasional Kantor</h4>
                        <p className="text-gray-600">Senin - Jumat: 08:00 - 16:00 WIT</p>
                        <p className="text-gray-600">Sabtu: 08:00 - 12:00 WIT</p>
                        <p className="text-red-500 text-sm mt-1">Minggu & Hari Libur Nasional: Tutup</p>
                    </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg h-fit">
            <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2"><Send size={20}/> Kirim Pesan</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Nama</label>
                  <input type="text" className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none" />
                </div>
                <div>
                   <label className="text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none" />
                </div>
              </div>
              <div>
                 <label className="text-sm font-medium text-gray-700">Subjek</label>
                  <input type="text" className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none" />
              </div>
              <div>
                 <label className="text-sm font-medium text-gray-700">Pesan</label>
                  <textarea rows={4} className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"></textarea>
              </div>
              <Button className="w-full">Kirim Pesan</Button>
            </form>
          </div>
        </div>
      </Section>

      {/* Interactive Map Section */}
      <section className="w-full h-96 relative shadow-inner border-t border-gray-200">
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127504.42566746838!2d140.6307223!3d-2.5387538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x686c584d09325603%3A0x1d583091931f6780!2sJayapura%2C%20Papua!5e0!3m2!1sen!2sid!4v1625637283921!5m2!1sen!2sid" 
           width="100%" 
           height="100%" 
           style={{ border: 0 }} 
           allowFullScreen 
           loading="lazy"
           title="Peta Lokasi STT Walter Post Jayapura"
           className="w-full h-full"
         ></iframe>
         
         <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:right-6 md:left-auto md:translate-x-0">
             <a 
                href="https://maps.app.goo.gl/zQFYsABnFTGJDQGE7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-primary px-6 py-3 rounded-full font-bold shadow-lg hover:bg-accent hover:text-white transition-all transform hover:scale-105 flex items-center gap-2 border border-gray-200"
             >
                 <MapPin size={20} /> Lihat Lokasi Tepat di Google Maps
             </a>
         </div>
      </section>
    </>
  );
};