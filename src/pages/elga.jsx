import React from 'react';
import profilElga from '../images/foto1.jpeg';

function Elga() {
  return (
    <div className="min-h-screen bg-pink-50 py-12 px-4 flex justify-center items-center font-sans">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-pink-200 relative">
        

        <div className="bg-gradient-to-b from-pink-400 to-pink-200 p-10 flex flex-col items-center">
          <div className="relative">
            <img 
              className="h-40 w-40 object-cover rounded-full border-4 border-white shadow-pink-300 shadow-lg" 
              src={profilElga}
              alt="Elga Angle Lumban Gaol" 
            />
         
            <div className="absolute bottom-2 right-2 bg-green-400 w-6 h-6 rounded-full border-4 border-white"></div>
          </div>
          <h1 className="mt-4 text-2xl font-extrabold text-white text-center drop-shadow-md">
            Elga Angle Lumban Gaol
          </h1>
          <p className="text-pink-700 font-semibold bg-white/50 px-3 py-1 rounded-full text-xs mt-2">
            @elga_angle
          </p>
        </div>

        
        <div className="p-8 space-y-6">
          
    
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-pink-50 p-2 rounded-xl border border-pink-100">
              <p className="text-[10px] text-pink-400 uppercase font-bold text-xs">Kelas</p>
              <p className="text-sm font-bold text-gray-700">T2B</p>
            </div>
            <div className="bg-pink-50 p-2 rounded-xl border border-pink-100">
              <p className="text-[10px] text-pink-400 uppercase font-bold text-xs">Prodi</p>
              <p className="text-sm font-bold text-gray-700 text-[11px]">Teknologi Informasi</p>
            </div>
            <div className="bg-pink-50 p-2 rounded-xl border border-pink-100">
              <p className="text-[10px] text-pink-400 uppercase font-bold text-xs">Domisili</p>
              <p className="text-sm font-bold text-gray-700">Doloksanggul</p>
            </div>
          </div>

          
          <div className="relative">
            <h2 className="text-lg font-bold text-pink-600 mb-2 flex items-center gap-2">
              <span>🌸</span> Tentang Saya
            </h2>
            <div className="bg-gray-50 p-4 rounded-2xl border-l-4 border-pink-400 italic">
              <p className="text-gray-600 text-sm text-justify leading-relaxed">
                Halo! Saya Elga Angle Lumban Gaol, mahasiswi aktif Teknologi Informasi di Universitas Brawijaya. 
                Saat ini, saya sedang menempuh perjalanan akademik untuk mengeksplorasi dunia teknologi 
                lebih dalam, dengan minat dan dedikasi yang sangat besar pada bidang Cyber Security. 
                Saya percaya bahwa keamanan data adalah pilar utama dalam ekosistem digital masa depan. 
                Melalui tugas Project-based Task berbasis ReactJS ini, saya tidak hanya belajar membangun 
                antarmuka web yang responsif menggunakan Tailwind CSS*, tetapi juga memahami pentingnya 
                kolaborasi tim yang aman melalui GitHub. Proses pengelolaan branch dan sinkronisasi kode 
                ini memberikan saya wawasan praktis mengenai integritas sistem dalam pengembangan 
                perangkat lunak. Sesuai dengan visi Building Up Noble Future, saya berkomitmen untuk 
                terus mengasah kemampuan teknis saya agar nantinya dapat berkontribusi dalam 
                menciptakan ruang siber yang lebih aman dan terlindungi. Saya sangat antusias untuk 
                mengombinasikan keahlian *frontend development* dengan prinsip-prinsip keamanan jaringan 
                guna menjadi tenaga ahli IT yang kompeten dan berintegritas di masa depan.
              </p>
            </div>
          </div>

          
          <div className="pt-4 border-t border-pink-100 text-center">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition-all shadow-lg active:scale-95 text-sm">
              Contact Me 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Elga;