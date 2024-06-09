import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Favoritos from "@/pages/Favoritos";
import PaginaErro from "@/pages/PaginaErro";
import Player from "@/pages/Player";
import PaginaBase from "./pages/PaginaBase";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <PaginaBase>
          <Routes>
            <Route path="/" element={<PaginaBase />}>
              <Route index element={<Home />} />
              <Route path="favoritos" element={<Favoritos />} />
              <Route path=":id" element={<Player />} />
              <Route path="*" element={<PaginaErro />} />
            </Route>
          </Routes>
        </PaginaBase>
      </BrowserRouter >
    </>
  );
}

export default AppRoutes;
