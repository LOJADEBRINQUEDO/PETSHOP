import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Página Inicial</h1>
            <p>Seja bem-vindo ao nosso projeto!</p>
            <Link to="/produtos">
                Ver Produtos
            </Link>
        </div>
    );
}