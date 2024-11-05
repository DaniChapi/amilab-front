import { NavLink } from "react-router-dom";
import {
  SlHome,
  SlMagnifier,
  SlMap,
  SlWallet,
} from "react-icons/sl";

export const NavbarJefe = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md py-2">
      <div className="flex justify-around items-center">
        {/* Inicio */}
        <NavLink
          to="/"
          className="flex flex-col items-center text-gray-600 hover:text-blue-500"
        >
          <SlHome />
          <span className="text-xs">Inicio</span>
        </NavLink>

        {/* Buscar */}
        <NavLink
          to="/buscar"
          className="flex flex-col items-center text-gray-600 hover:text-blue-500"
        >
          <SlMagnifier />
          <span className="text-xs">Agregar visita</span>
        </NavLink>

        {/* Hoja de ruta */}
        <NavLink
          to="/"
          className="flex flex-col items-center text-gray-600 hover:text-blue-500"
        >
          <SlMap />
          <span className="text-xs">Hoja de ruta</span>
        </NavLink>
        {/* Desempeño */}
        <NavLink
          to="/"
          className="flex flex-col items-center text-gray-600 hover:text-blue-500"
        >
          <SlWallet />
          <span className="text-xs">Desempeño</span>
        </NavLink>
      </div>
    </nav>
  );
};
