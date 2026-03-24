import foto from "./profilkeysha.jpg";

export default function Keysha() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-pink-500 flex items-center justify-center">
      <div className="bg-white shadow-2x1 rounded-2x1 p-16 w-100 text-center hover:scale-105 transition duration-300">
        
        <img src={foto} alt="profile" className="w-32 h-32 rounded-full object-cover object-top mx-auto -mt-20" />

        <h1 className="text-2xl font-bold">Keysha Faradina Destrivania</h1>
        <p>Kelas: T2B</p>
        <p>Prodi: Teknologi Informasi</p>
        <p>Domisili: Jogja</p>

        <p className="mt-4 text-gray-700 text-sm leading-relaxed">
          Saya adalah seorang mahasiswa yang memiliki ketertarikan pada dunia teknologi, khususnya dalam bidang pengembangan aplikasi dan website. Saya senang mengeksplorasi berbagai hal baru yang dapat meningkatkan kemampuan saya, baik dalam pemrograman maupun dalam memahami konsep desain yang baik. Bagi saya, teknologi bukan hanya tentang membuat program berjalan, tetapi juga tentang bagaimana menciptakan solusi yang bermanfaat dan mudah digunakan oleh banyak orang. Saya termasuk pribadi yang memiliki rasa ingin tahu tinggi, tekun, dan tidak mudah menyerah ketika menghadapi kesulitan. Saya juga mampu bekerja secara individu maupun dalam tim dengan baik. Melalui project ini, saya ingin mengembangkan kemampuan teknis serta melatih kerja sama tim dalam mengelola sebuah project menggunakan tools seperti ReactJS dan GitHub.
        </p>

      </div>
    </div>
  );
}