import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <h1>Minha Loja</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/produtos">Produtos</Link>
            </div>
        </nav>
    );
}
