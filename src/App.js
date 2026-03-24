<<<<<<< HEAD
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
=======
function App() {
  return (
    <h1 className="text-5xl text-red-500 font-bold">
      TEST TAILWIND
    </h1>
  );
}

export default App;
>>>>>>> f865f69a70c26dead019513217f9f58429801d48
