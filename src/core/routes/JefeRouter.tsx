import { Navigate, Route, Routes } from "react-router-dom";
import { NavbarJefe } from "../../components/ui/Navbar-Jefe";
import { Clientes, HomeViewJefe, Ventas } from "../../jefe/views";
import VentasPorVendedor from "../../jefe/views/VentasPorVendedor";
import VentasTotales from "../../jefe/views/VentasTotales";
import Logo from "../../assets/logo-amilab.jpg";

export const JefeRouter = () => {
  // Define funciones para alternar las vistas
  const handleToggleToVentasTotales = () => {
    console.log("Alternar a vista de Ventas Totales");
  };

  const handleToggleToVentasPorVendedor = () => {
    console.log("Alternar a vista de Ventas por Vendedor");
  };

  return (
    <>
      <div className="w-full">
        <img
          src={Logo}
          alt="logo"
          className="mx-auto h-[60px] mt-2"
        />
      </div>
      <NavbarJefe />
      <Routes>
        {/* Inicio */}
        <Route path="home" element={<HomeViewJefe />} />
        {/* Gestion de Ventas */}
        <Route path="ventas" element={<Ventas />} />
        {/* Clientes */}
        <Route path="clientes" element={<Clientes />} />
        {/* Gestion de ventas por vendedor */}
        <Route
          path="ventasporvendedor"
          element={<VentasPorVendedor onToggleView={handleToggleToVentasTotales} />}
        />
        {/* Gestion de ventas totales */}
        <Route
          path="ventastotalesr"
          element={<VentasTotales onToggleView={handleToggleToVentasPorVendedor} />}
        />

        <Route path="*" element={<Navigate to="/jefe/home" />} />
      </Routes>
    </>
  );
};

