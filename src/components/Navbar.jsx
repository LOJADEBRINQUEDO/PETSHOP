
import { NavLink } from "react-router";

export default function Navbar() {
    const linkClasses = ({ isActive }) =>
        [
            "rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2",
            isActive
                ? "bg-emerald-100 text-emerald-800"
                : "text-gray-700 hover:bg-gray-100 hover:text-emerald-700",
        ].join(" ");

    return (
        <header className="border-b border-gray-200 bg-white shadow-sm">
            <nav
                aria-label="Navegação principal"
                className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"
            >
                <NavLink
                    to="/"
                    end
                    className="text-xl font-extrabold tracking-tight text-emerald-800 sm:text-2xl"
                    aria-label="Petshop - página inicial"
                >
                    Petshop
                </NavLink>

                <div className="flex flex-wrap items-center gap-2">
                    <NavLink to="/" end className={linkClasses}>
                        Home
                    </NavLink>

                    <NavLink to="/produtos" className={linkClasses}>
                        Produtos
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}
