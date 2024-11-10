import { Navigate, Route, Routes } from "react-router-dom";
import { NavbarJefe } from "../../components/ui/Navbar-Jefe";
import { Clientes, HomeViewJefe } from "../../jefe/views";

export const JefeRouter = () => {
  return (
    <>
      <NavbarJefe />
      <Routes>
        {/* Inicio */}
        <Route path="home" element={<HomeViewJefe />} />
        {/* Hojas de ruta */}
        {/* Gestion de Ventas */}
        {/* Clientes */}
        <Route path="clientes" element={<Clientes />} />

        <Route path="*" element={<Navigate to="/jefe/home" />} />
      </Routes>
    </>
  );
};
