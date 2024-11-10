import { Navigate, Route, Routes } from "react-router-dom";
import { HomeEmpleado } from "../../trabajador/views/Home";
import { NavbarVendedor } from "../../components/ui/Navbar-vendedor";

export const EmpleadoRouter = () => {
  return (
    <>
      <NavbarVendedor />
      <Routes>
        {/* Inicio  */}
        <Route path="home" element={<HomeEmpleado />} />
        {/* Agregar visita  */}
        {/* Hoja de ruta  */}
        {/* Desempeño  */}
        <Route
          path="*"
          element={<Navigate to="/vendedor/home" />}
        />
      </Routes>
    </>
  );
};
