import EstilosGlobais from "./components/EstilosGlobais";
import PaginaErro from "./pages/PaginaErro";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <EstilosGlobais />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PaginaErro />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
