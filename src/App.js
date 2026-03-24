import { BrowserRouter, Routes, Route } from "react-router-dom";
import Belqis from "./pages/belqis";
import Elga from "./pages/Elga";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/belqis" element={<Belqis />} />
        <Route path="/elga" element={<Elga />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
