import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Elga from './pages/elga'; // Pastikan path-nya benar ke file elga.jsx kamu

function App() {
  return (
    <Router>
      <Routes>
        {/* Ini yang bikin localhost:3000/elga bisa munculin profilmu */}
        <Route path="/elga" element={<Elga />} />
        
        {/* Kamu bisa tambah route temenmu di sini nanti */}
        {/* <Route path="/nama-temen" element={<Temen />} /> */}
      </Routes>
    </Router>
  );
}

export default App;