import { Routes, Route } from "react-router-dom";
import { HomeEmpleado } from "../../trabajador/views/Home";
import { Clientes } from "../../jefe/views";
import { Ventas } from "../../jefe/views";
import { ProtectedVendedorRoute } from "./ProtectedRoutes"; // Importa el componente de ruta protegida

export const EmpleadoRouter = () => {
  return (
    <Routes>
      <Route element={<ProtectedVendedorRoute />}>
        <Route path="home" element={<HomeEmpleado />} />
        <Route path="clientes" element={<Clientes />} />
        <Route path="ventas" element={<Ventas />} />
      </Route>
    </Routes>
  );
};