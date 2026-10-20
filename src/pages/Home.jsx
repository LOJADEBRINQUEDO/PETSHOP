import { Link } from 'react-router';

export default function Home() {
    return (
        <div className="p-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Cuidado e carinho para o seu pet</h1>
            <p className="mb-6">Conheça nossa seleção de alimentação, higiene e petiscos para o bem-estar de cães e gatos.</p>
            <Link to="/produtos" className="inline-block bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-800">
                Ver Produtos
            </Link>
        </div>
    );
}
