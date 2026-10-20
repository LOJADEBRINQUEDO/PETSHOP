export default function Card({ nome, preco, descricao }) {
    return (
        <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white">
            <h3 className="text-xl font-bold mb-2">{nome}</h3>
            <p className="text-gray-600 mb-2">{descricao}</p>
            <span className="text-green-600 font-bold block mb-4">{preco}</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Comprar
            </button>
        </div>
    );
}