export default function Card({ nome, preco, descricao }) {
    return (
        <article className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white">
            <h2 className="text-xl font-bold mb-2">{nome}</h2>
            <p className="text-gray-600 mb-2">{descricao}</p>
            <span className="text-emerald-700 font-bold block">{preco}</span>
        </article>
    );
}
