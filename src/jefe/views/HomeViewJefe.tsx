import {SlArrowDown} from 'react-icons/sl'
import { RiCircleLine } from "react-icons/ri";

export const HomeViewJefe = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl">Hoja de rutas</h1>
      <form>
        <input type="text" className="w-full border rounded-md p-2 my-2" placeholder="Buscar" />
      </form>
      <div className='flex flex-col'>
      <div className="bg-[#B8E8FC] rounded-md flex justify-between p-2 items-center mb-2">
        <h2 className="p-1">Vendedor MMG</h2>
        <span className="block pr-2"> 
          <SlArrowDown />
        </span>
      </div>
        <div className='bg-[#DFCCFB] p-2 rounded-md'>
          <h2 className='text-center text-xl'>Nombre cliente</h2>
          <h3>Ultimas acciones:</h3>
          <div className='flex items-center'>
            <span className='block px-2 mt-2'><RiCircleLine  className='bg-[#ffffff] text-[#ffffff] rounded-full'/></span>
            <p>Reunion con el cliente 11/12</p>
          </div>
          <div className='ml-[13px]'>|</div>
        </div>
      </div>
    </div>
  );
};
