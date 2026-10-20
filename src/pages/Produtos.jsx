import Card from '../components/Card';

export default function Produtos() {
    return (
        <div>
            <h1>Nossos Produtos</h1>

            <div>
                <Card nome="Produto 1" preco="R$ 50,00" descricao="Descrição simples do produto 1." />
                <Card nome="Produto 2" preco="R$ 80,00" descricao="Descrição simples do produto 2." />
                <Card nome="Produto 3" preco="R$ 120,00" descricao="Descrição simples do produto 3." />
            </div>
        </div>
    );
}