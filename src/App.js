import { BrowserRouter, Routes, Route } from "react-router-dom";
import Keysha from "./profil/Keysha";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/keysha" element={<Keysha />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;