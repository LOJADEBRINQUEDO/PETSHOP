import Card from '../components/Card';

export default function Produtos() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Nossos Produtos</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card
                    nome="Ração"
                    preco="R$ 150,00"
                    descricao="Ração premium 15kg para cães adultos, rica em vitaminas e proteínas."
                />
                <Card
                    nome="Shampoo"
                    preco="R$ 80,00"
                    descricao="Shampoo neutro e hipoalergênico para cães e gatos de todos os portes."
                />
                <Card
                    nome="Ossinho"
                    preco="R$ 20,00"
                    descricao="Petisco crocante e saudável para auxílio na higiene bucal e diversão do seu pet."
                />
            </div>
        </div>
    );
}