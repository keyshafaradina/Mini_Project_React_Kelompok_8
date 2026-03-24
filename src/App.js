import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Belqis from "./pages/belqis";

function App() {
  return (
    <BrowserRouter>
      <div className="p-5">

        {/* Navbar sederhana */}
        <nav className="mb-5">
          <Link to="/" className="mr-4 text-blue-500">Home</Link>
          <Link to="/belqis" className="text-blue-500">Profil Belqis</Link>
        </nav>

        <Routes>
          {/* Halaman Home */}
          <Route path="/" element={
            <h1 className="text-3xl font-bold text-center">
              Selamat Datang di Website Profil
            </h1>
          } />

          {/* Halaman Profil */}
          <Route path="/belqis" element={<Belqis />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
