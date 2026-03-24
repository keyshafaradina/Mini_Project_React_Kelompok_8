import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Elga from './pages/elga'; 

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={
          <div className="flex items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-pink-500">Welcome to Group 8 Project</h1>
          </div>
        } />

        
        <Route path="/elga" element={<Elga />} />
        
    
      </Routes>
    </Router>
  );
}

export default App;