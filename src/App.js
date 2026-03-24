import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Elga from './pages/elga'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Utama Kelompok */}
        <Route path="/" element={
          <div className="flex items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-pink-500">Welcome to Group 8 Project</h1>
          </div>
        } />

        {/* Route Profil Elga - Pastikan E-nya Kapital di dalam tag */}
        <Route path="/elga" element={<Elga />} />
        
      </Routes>
    </Router>
  );
}

export default App;