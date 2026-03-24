function Belqis() {
  return (
    <div className="min-h-screen bg-[#f3f2ef] p-6 flex justify-center">
      
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-6">

        
        <div className="bg-white rounded-xl shadow p-4 h-fit">
          <div className="text-center">
            <img
              src="/foto.jpg.jpeg"
              alt="Foto Profil Kecil"
              className="w-20 h-20 rounded-full mx-auto mb-2 object-cover"
            />
            <h2 className="font-semibold">Belqis Nabilah</h2>
            <p className="text-sm text-gray-500">Mahasiswa TI</p>
            <p className="text-xs text-gray-400 mt-1">
              Madiun, Jawa Timur, Indonesia
            </p>
          </div>

          <div className="mt-4 text-sm text-gray-600 space-y-2">
            <p>🎓 Kelas: T2B</p>
            <p>👥 Koneksi: 120</p>
            <p>📌 Tersimpan: 10</p>
          </div>
        </div>

        
        <div className="md:col-span-2 space-y-6">

          
          <div className="bg-white rounded-xl shadow overflow-hidden">
            
            
            <div className="h-36 bg-gradient-to-r from-gray-700 to-gray-900"></div>

            
            <div className="px-6">
              <img
                src="/foto.jpg.jpeg"
                alt="Foto Profil Utama"
                className="w-28 h-28 rounded-full border-4 border-white -mt-14 object-cover"
              />

              
              <div className="mt-2">
                <h1 className="text-xl font-bold">
                  Belqis Nabilah Taqiyah
                </h1>
                <p className="text-gray-600 text-sm">
                  Mahasiswa Teknologi Informasi
                </p>
                <p className="text-gray-400 text-sm">
                  Madiun, Jawa Timur, Indonesia
                </p>

                
                <p className="text-gray-500 text-sm mt-1">
                  🎓 Kelas: T2B
                </p>

                
                <div className="flex gap-2 mt-3">
                  <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-700">
                    Connect
                  </button>
                  <button className="border px-4 py-1 rounded-full text-sm hover:bg-gray-100">
                    Message
                  </button>
                </div>
              </div>
            </div>

            
            <div className="px-6 py-4 border-t mt-4 text-sm text-gray-600 flex justify-between">
              <p>👀 Profile views: 50</p>
              <p>📊 Post impressions: 120</p>
            </div>
          </div>

          
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold mb-2">About</h2>
            <p className="text-gray-600 text-sm text-justify">
              Saya adalah mahasiswa jurusan Teknologi Informasi yang memiliki minat besar dalam dunia teknologi, 
              khususnya pengembangan web dan aplikasi. Saya senang belajar hal baru dan terus mengembangkan kemampuan 
              saya dalam bidang pemrograman.Selain itu, saya juga memiliki ketertarikan pada desain antarmuka agar 
              aplikasi yang dibuat tidak hanya berfungsi dengan baik tetapi juga menarik secara visual. Saya terbiasa 
              bekerja secara individu maupun dalam tim, serta mampu beradaptasi dengan lingkungan baru. 
              Saya juga memiliki semangat untuk terus meningkatkan kemampuan melalui berbagai proyek dan pengalaman belajar 
              secara mandiri. Saya percaya bahwa dengan kerja keras, disiplin, dan konsistensi, saya dapat mencapai tujuan 
              saya menjadi seorang developer yang profesional dan mampu memberikan kontribusi positif di dunia teknologi.
            </p>
          </div>

        </div>

        
        <div className="bg-white rounded-xl shadow p-4 h-fit">
          <h2 className="font-semibold mb-3">People you may know</h2>

          <div className="space-y-3 text-sm">
            
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <p className="font-medium">Seseorang</p>
                <p className="text-gray-500 text-xs">Mahasiswa</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <p className="font-medium">Orang Lain</p>
                <p className="text-gray-500 text-xs">Developer</p>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Belqis;