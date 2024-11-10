import { NavLink } from "react-router-dom";
import { SlHome, SlUser, SlMap, SlWallet } from "react-icons/sl";

export const NavbarJefe = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md py-2">
      <div className="flex justify-around items-center">
        {/* Inicio */}
        <NavLink
          to="/jefe/home"
          className="flex flex-col items-center text-gray-600 hover:text-blue-500"
        >
          <SlHome />
          <span className="text-xs">Inicio</span>
        </NavLink>

        {/* Buscar */}
        <NavLink
          to="/jefe/clientes"
          className="flex flex-col items-center text-gray-600 hover:text-blue-500"
        >
          <SlUser />
          <span className="text-xs">Clientes</span>
        </NavLink>

        {/* Hoja de ruta */}
        <NavLink
          to="/jefe/rutas"
          className="flex flex-col items-center text-gray-600 hover:text-blue-500 "
        >
          <SlMap />
          <span className="text-xs">Hoja de ruta</span>
        </NavLink>
        {/* Desempeño */}
        <NavLink
          to="/jefe/ventas"
          className="flex flex-col items-center text-gray-600 hover:text-blue-500"
        >
          <SlWallet />
          <span className="text-xs">Ventas</span>
        </NavLink>
      </div>
    </nav>
  );
};
