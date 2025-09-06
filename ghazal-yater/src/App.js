// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UnderConstruction from "./pages/UnderConstruction";
import UnderConstruction2 from "./pages/UnderConstruction copy";

function App() {
  return (
    <Router>
      <Routes>
        {/* Catch-all route renders UnderConstruction */}
        <Route path="/" element={<UnderConstruction />} />
        <Route path="/cow" element={<UnderConstruction2 />} />
      </Routes>
    </Router>
  );
}

export default App;
