import { FC } from "react";
import { RiCircleLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

interface VentaProps {
  nombre: string;
  acciones?: string[];
}

export const Venta: FC<VentaProps> = ({ nombre }) => {
  return (
    <>
      <div className="bg-[#DFCCFB] p-2 rounded-md">
        <h2 className="text-center text-xl">{nombre}</h2>
        <h3>Ultimas acciones:</h3>
        <div className="flex items-center">
          <span className="block px-2">
            <RiCircleLine className="bg-[#ffffff] text-[#ffffff] rounded-full" />
          </span>
          <p>Reunion con el cliente 11/12</p>
        </div>
        <div className="ml-[13px]">|</div>
        <div className="flex items-center">
          <span className="block px-2">
            <RiCircleLine className="bg-[#ffffff] text-[#ffffff] rounded-full" />
          </span>
          <p>Reunion con el cliente 11/12</p>
        </div>
        <p className="text-center mt-4 text-sm underline transition-all hover:text-white">
          <NavLink to="#">Ver historia completa</NavLink>
        </p>
      </div>
    </>
  );
};
