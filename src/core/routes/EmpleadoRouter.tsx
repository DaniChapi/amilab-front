import { Navigate, Route, Routes } from "react-router-dom";
import { HomeEmpleado } from "../../trabajador/views/Home";
import { NavbarVendedor } from "../../components/ui/Navbar-vendedor";
import Logo from "../../assets/logo-amilab.jpg";

export const EmpleadoRouter = () => {
  return (
    <>
      <div className="w-full">
        <img
          src={Logo}
          alt="logo"
          className="mx-auto h-[60px] mt-2"
        />
      </div>
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
