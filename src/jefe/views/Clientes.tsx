export const Clientes = () => {
  return (
    <div className="p-4">
      <div className="flex flex-wrap flex-col md:gap-4">
        <select className=" w-full md:w-1/2 mb-4 border border-blue-900  p-2 rounded-md">
          <option value="nada" defaultValue={""} disabled>
            Seleccione un cliente
          </option>
          <option value="ClientesFrecuentes">
            Clientes Frecuentes
          </option>
          <option value="ClienteNoCompra">
            Clientes Sin compras este año
          </option>
          <option value="ClienteConCompra">
            Clientes con compra frecuente
          </option>
        </select>
        <select className="w-full md:w-1/2 mb-4 border border-blue-900  p-2 rounded-md">
          <option value="nada" defaultValue={""} disabled>
            Seleccione un vendedor
          </option>
          <option value="vendedorMMG">Vendedor MMG</option>
          <option value="vendedorHGC">Vendedor HGC</option>
          <option value="vendedorGCP">Vendedor GCP</option>
        </select>
      </div>

      <div className="bg-blue-300 p-4 rounded-md text-[#333333]">
        <p className="text-center text-xl mb-2">
          Nombre empresa
        </p>
        <ul className="flex flex-col justify-between">
          <li className="flex justify-between">
            <p>Debe:</p> $150.000
          </li>
          <li className="flex justify-between">
            <p>Rut empresa:</p>
            <span>99.999.999-9</span>
          </li>
          <li className="flex justify-between">
            <p>Ultima compra:</p> 12/12/2024
          </li>
          <li className="flex justify-between">
            <p>Total compras:</p> $1000.000
          </li>
        </ul>
      </div>
    </div>
  );
};
