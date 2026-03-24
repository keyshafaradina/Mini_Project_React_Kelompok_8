import foto from "./profilkeysha.jpeg";

export default function Keysha() {
  return (
    <div className="min-h-screen bg-pink-200 flex items-center justify-center text-white p-10">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-6">
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl font-bold">
            Hai, Saya <span className="text-pink-400">Keysha</span>
          </h1>

          <p className="text-gray-700">
            Saya adalah seorang mahasiswa yang memiliki ketertarikan pada dunia teknologi, khususnya dalam bidang pengembangan aplikasi dan website. Saya senang mengeksplorasi berbagai hal baru yang dapat meningkatkan kemampuan saya, baik dalam pemrograman maupun dalam memahami konsep desain yang baik. Bagi saya, teknologi bukan hanya tentang membuat program berjalan, tetapi juga tentang bagaimana menciptakan solusi yang bermanfaat dan mudah digunakan oleh banyak orang. Saya termasuk pribadi yang memiliki rasa ingin tahu tinggi, tekun, dan tidak mudah menyerah ketika menghadapi kesulitan. Saya juga mampu bekerja secara individu maupun dalam tim dengan baik. Melalui project ini, saya ingin mengembangkan kemampuan teknis serta melatih kerja sama tim dalam mengelola sebuah project menggunakan tools seperti ReactJS dan GitHub.
          </p>
          <div className="space-x-3">
            <button className="bg-pink-400 px-5 py-2 rounded-lg hover:bg-pink-500 transition">
              Kontak
            </button>
          </div>
        </div>
        <div className="bg-pink-400 rounded-xl shadow-xl p-4 text-center hover:bg-pink-500 transition">
          <img src={foto} alt="profile"/>

          <h2 className="text-xl font-bold mt-4">Keysha Faradina Destrivania</h2>
          <div className="mt-3 text-gray-700 text-sm space-y-1">
            <p>Kelas: T2B</p>
            <p>Prodi: Teknologi Informasi</p>
            <p>Domisili: Jogja</p>
          </div>
        </div>

      </div>
    </div>
  );
}