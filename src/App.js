import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Elga from "./pages/Elga";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Elga />} />
        <Route path="/elga" element={<Elga />} />
      </Routes>
    </Router>
  );
}

export default App;