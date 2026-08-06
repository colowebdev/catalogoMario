import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Personajes from "./pages/Personajes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="contenedor">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/personajes" element={<Personajes />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
