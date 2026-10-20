import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;