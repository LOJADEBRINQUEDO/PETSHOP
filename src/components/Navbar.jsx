import { Link } from 'react-router';

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h1 className="font-bold text-xl">Minha Loja</h1>
            <div className="flex gap-4">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/produtos" className="hover:underline">Produtos</Link>
            </div>
        </nav>
    );
}