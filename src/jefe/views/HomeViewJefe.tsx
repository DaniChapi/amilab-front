import { SlArrowDown, SlClose } from "react-icons/sl";
import { Venta } from "../../components/ventas/Venta";
import { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";

export const HomeViewJefe = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const parent = useRef(null);

  useEffect(() => {
    parent.current &&
      autoAnimate(parent.current, { duration: 200 });
  }, [parent]);

  return (
    <div className="p-4">
      <h1 className="text-2xl">Hoja de rutas</h1>
      <form>
        <input
          type="text"
          className="w-full border rounded-md p-2 my-2"
          placeholder="Buscar"
        />
      </form>

      <div className="flex flex-col" ref={parent}>
        <div
          className="bg-[#B8E8FC] rounded-md flex justify-between p-2 items-center mb-2"
          onClick={handleOpen}
        >
          <h2 className="p-1">Vendedor MMG</h2>
          <span className="block pr-2 transition-all">
            {isOpen ? <SlClose /> : <SlArrowDown />}
          </span>
        </div>

        {isOpen && <Venta />}
      </div>
    </div>
  );
};
