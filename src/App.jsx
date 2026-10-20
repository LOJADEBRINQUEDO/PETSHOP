
import { BrowserRouter, Routes, Route } from "react-router";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Produtos from "./pages/Produtos";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-gray-50">
        <Navbar />

        <main className="w-full flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
