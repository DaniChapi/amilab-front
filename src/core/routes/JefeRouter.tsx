import { Navigate, Route, Routes } from "react-router-dom";
import { NavbarJefe } from "../../components/Navbar-Jefe";
import { HomeViewJefe } from "../../jefe/views/HomeViewJefe";

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
        <Route path="*" element={<Navigate to="/jefe/home" />} />
      </Routes>
    </>
  );
};
