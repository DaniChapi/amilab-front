import { Acordeon } from "../../components/ui/Acordeon";

export const HomeViewJefe = () => {
  return (
    <div className="p-4 mb-10">
      <h1 className="text-2xl">Hoja de rutas</h1>
      <form>
        <input
          type="text"
          className="w-full border rounded-md p-2 my-2 outline-none focus:ring-2 focus:ring-blue-200 transition"
          placeholder="Buscar"
        />
      </form>
      <Acordeon nombreVendedor="Vendedir MMG" />
      <Acordeon nombreVendedor="Vendedir HGC" />
      <Acordeon nombreVendedor="Vendedir GCP" />
    </div>
  );
};
