import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Produtos from './pages/Produtos';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-gray-50">
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}