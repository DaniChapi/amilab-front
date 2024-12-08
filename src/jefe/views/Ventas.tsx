import { Char } from "../../components/ui/chars/Char";

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const anios = ["2024", "2023", "2022"];

const vendedores = ["MMG", "HGC", "GCP"];

export const Ventas = () => {
  return (
    <div className="w-full mt-5 p-4">
      <div className="flex flex-wrap md:flex-nowrap justify-center md:gap-3">
        <select className="appearance-none w-full md:w-1/3 mb-4 border-blue-900  p-2 rounded-md border">
          {anios.map((anio) => (
            <option key={anio} value={anio}>
              {anio}
            </option>
          ))}
        </select>

        <select className="appearance-none w-full md:w-1/3 mb-4 border-blue-900  p-2 rounded-md border">
          {meses.map((mes) => (
            <option key={mes} value={mes}>
              {mes}
            </option>
          ))}
        </select>

        <select className="appearance-none w-full md:w-1/3 mb-4 border-blue-900  p-2 rounded-md border">
          {vendedores.map((vendedor) => (
            <option key={vendedor} value={vendedor}>
              {vendedor}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Char />
      </div>
    </div>
  );
};
