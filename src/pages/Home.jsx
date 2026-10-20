import { Link } from 'react-router';

export default function Home() {
    return (
        <div className="p-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Página Inicial</h1>
            <p className="mb-6">Seja bem-vindo ao nosso projeto!</p>
            <Link to="/produtos" className="bg-blue-600 text-white px-4 py-2 rounded">
                Ver Produtos
            </Link>
        </div>
    );
}