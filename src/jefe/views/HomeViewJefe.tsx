import { useEffect, useRef, useState } from "react";
import { SlArrowDown, SlClose } from "react-icons/sl";
import autoAnimate from "@formkit/auto-animate";
import { Venta } from "../../components/ventas/Venta";

export const HomeViewJefe = () => {
  const [isOpenMMG, setIsOpenMMG] = useState(false);
  const [isOpenHGC, setIsOpenHGC] = useState(false);

  const handleOpenMMG = () => {
    setIsOpenMMG(!isOpenMMG);
  };

  const handleOpenHGC = () => {
    setIsOpenHGC(!isOpenHGC);
  };

  const vendedorMMG = useRef(null);
  const vendedorHGC = useRef(null);

  useEffect(() => {
    vendedorMMG.current &&
      autoAnimate(vendedorMMG.current, { duration: 200 });
  }, [vendedorMMG]);

  useEffect(() => {
    vendedorHGC.current &&
      autoAnimate(vendedorHGC.current, { duration: 200 });
  }, [vendedorHGC]);

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

      <div className="flex flex-col" ref={vendedorMMG}>
        <div
          className="bg-[#B8E8FC] rounded-md flex justify-between p-2 items-center mb-2"
          onClick={handleOpenMMG}
        >
          <h2 className="p-1">Vendedor MMG</h2>
          <span className="block pr-2 transition-all">
            {isOpenMMG ? <SlClose /> : <SlArrowDown />}
          </span>
        </div>

        {isOpenMMG && <Venta />}
      </div>

      <div className="flex flex-col mt-2" ref={vendedorHGC}>
        <div
          className="bg-[#B8E8FC] rounded-md flex justify-between p-2 items-center mb-2"
          onClick={handleOpenHGC}
        >
          <h2 className="p-1">Vendedor HGC</h2>
          <span className="block pr-2 transition-all">
            {isOpenHGC ? <SlClose /> : <SlArrowDown />}
          </span>
        </div>
        {isOpenHGC && <Venta />}
      </div>
    </div>
  );
};
