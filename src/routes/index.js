import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Assets from '../pages/Assets'
import Units from "../pages/Units";
import Users from "../pages/Users";
import Companies from "../pages/Companies";

function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="ativos" element={<Assets/>} />
      <Route path="empresas" element={<Companies/>} />
      <Route path="unidades" element={<Units/>} />
      <Route path="usuarios" element={<Users/>} />
      <Route path="*" element={<h1>404 - Página não encontrada!</h1>} />
    </Routes>
  );
}

export default routes;
