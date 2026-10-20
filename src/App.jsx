
import { BrowserRouter, Routes, Route, Link } from "react-router";

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
            <Route
              path="*"
              element={
                <section className="p-8 text-center">
                  <h1 className="mb-4 text-3xl font-bold">Página não encontrada</h1>
                  <Link to="/" className="text-emerald-800 underline">
                    Voltar para a página inicial
                  </Link>
                </section>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
