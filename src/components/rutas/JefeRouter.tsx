import { Routes, Route } from "react-router-dom";
import { HomeViewJefe } from "../../jefe/views";
import { Clientes } from "../../jefe/views";
import { Ventas } from "../../jefe/views";
import { ProtectedJefeRoute } from "./ProtectedRoutes"; // Importa el componente de ruta protegida

export const JefeRouter = () => {
  return (
    <Routes>
      <Route element={<ProtectedJefeRoute />}>
        <Route path="home" element={<HomeViewJefe />} />
        <Route path="clientes" element={<Clientes />} />
        <Route path="ventas" element={<Ventas />} />
      </Route>
    </Routes>
  );
};