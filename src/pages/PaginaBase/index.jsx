import EstilosGlobais from "@/components/EstilosGlobais";
import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import FavoritosProvider from "@/context/FavoritosContext";
import { Outlet } from "react-router-dom";



const PaginaBase = () => {
    return (
        <main>
            <EstilosGlobais />
            <Cabecalho />
            <FavoritosProvider>
                <Outlet />
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase