import { NavLink } from "react-router-dom";
import { SlHome, SlMap, SlWallet } from "react-icons/sl";
import { IoAddCircleOutline } from "react-icons/io5";

export const NavbarVendedor = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md py-2">
      <div className="flex justify-around items-center">
        {/* Inicio */}
        <NavLink
          to="/vendedor/home"
          className="flex flex-col items-center text-gray-600 hover:text-blue-500"
        >
          <SlHome />
          <span className="text-xs">Inicio</span>
        </NavLink>

        {/* Buscar */}
        <NavLink
          to="/vendedor/visita"
          className="flex flex-col items-center text-gray-600 hover:text-blue-500"
        >
          <IoAddCircleOutline className="text-xl" />
          <span className="text-xs">Agregar visita</span>
        </NavLink>

        {/* Hoja de ruta */}
        <NavLink
          to="/vendedor/rutas"
          className="flex flex-col items-center text-gray-600 hover:text-blue-500 "
        >
          <SlMap />
          <span className="text-xs">Hoja de ruta</span>
        </NavLink>
        {/* Desempeño */}
        <NavLink
          to="/vendedor/ventas"
          className="flex flex-col items-center text-gray-600 hover:text-blue-500"
        >
          <SlWallet />
          <span className="text-xs">Ventas</span>
        </NavLink>
      </div>
    </nav>
  );
};
