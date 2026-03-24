import { BrowserRouter, Routes, Route } from "react-router-dom";
import Belqis from "./pages/belqis";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1 className="text-5xl text-red-500 font-bold">TEST TAILWIND</h1>} />
        <Route path="/belqis" element={<Belqis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;