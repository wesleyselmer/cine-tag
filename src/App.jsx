import { BrowserRouter, Route, Routes } from "react-router-dom";
import EstilosGlobais from "./components/EstilosGlobais";
import Cabecalho from "./components/Cabecalho";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import PaginaErro from "./pages/PaginaErro";
import Rodape from "./components/Rodape";
import FavoritosProvider from "./components/context/FavoritosContext";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <EstilosGlobais />
        <Cabecalho />
        <FavoritosProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="*" element={<PaginaErro />} />
          </Routes>
        </FavoritosProvider>
        <Rodape />
      </BrowserRouter>
    </>
  );
}
