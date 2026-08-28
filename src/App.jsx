import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/Home";
import CategoriaScreen from "./pages/Categoria";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/categoria/:id" element={<CategoriaScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;