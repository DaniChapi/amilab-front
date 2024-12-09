import { useEffect, useState } from "react";
import  {client}  from "../../supabase/client";
import { Customer, Sale, Seller, Visita } from "../types";

interface VentaProps {
  vendedorAsignado: string;
}

export const Venta = ({ vendedorAsignado }: VentaProps) => {
  const [salesData, setSalesData] = useState<Sale[]>([]);
  const [customersData, setCustomersData] = useState<Customer[]>([]);
  const [visitsData, setVisitsData] = useState<Visita[]>([]);
  const [sellersData, setSellersData] = useState<Seller[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch customers
      const { data: customers, error: customersError } = await client
        .from("customers")
        .select("*");
      if (customersError) {
        console.error("Error fetching customers:", customersError);
        return;
      }

      // Fetch sales
      const { data: sales, error: salesError } = await client
        .from("sales")
        .select("*");
      if (salesError) {
        console.error("Error fetching sales:", salesError);
        return;
      }

      // Fetch visits
      const { data: visits, error: visitsError } = await client
        .from("visits")
        .select("*");
      if (visitsError) {
        console.error("Error fetching visits:", visitsError);
        return;
      }

      // Fetch sellers
      const { data: sellers, error: sellersError } = await client
        .from("sellers")
        .select("*");
      if (sellersError) {
        console.error("Error fetching sellers:", sellersError);
        return;
      }

      // Convertir datos de clientes para usar el campo "RAZON SOCIAL" correctamente
      const formattedCustomers = customers?.map((customer) => ({
        ...customer,
        RAZON_SOCIAL: customer["RAZON SOCIAL"],
      }));

      setCustomersData(formattedCustomers || []);
      setSalesData(sales || []);
      setVisitsData(visits || []);
      setSellersData(sellers || []);
    };

    fetchData();
  }, []);

  // Combinar datos basados en las relaciones
  const combinedData = salesData
    .map((sale) => {
      // Encontrar el cliente correspondiente
      const customer = customersData.find((c) => c.RUT === sale.cliente);
      if (!customer) {
        console.log("No customer found for sale", sale);
        return null;
      }

      // Encontrar la visita correspondiente
      const visit = visitsData.find((v) => v.client_id === customer.client_id);
      if (!visit) {
        console.log("No visit found for customer", customer);
        return null;
      }

      // Verificar que el seller_id de la visita coincida con el seller_id del vendedor
      const seller = sellersData.find((s) => s.seller_id === visit.seller_id);
      if (!seller) {
        console.log("No seller found for visit", visit);
        return null;
      }

      // Si el seller_id de la visita coincide con el seller_id del vendedor y el vendedor es el asignado
      if (visit.seller_id === seller.seller_id && seller.name === vendedorAsignado) {
        return {
          ...sale,
          razon_social: customer?.RAZON_SOCIAL || "N/A",
          fecha_visita: visit?.fecha_visita || "No visit found",
          seller_name: seller?.name || "No seller found",
        };
      }

      // Si no coinciden, no mostrar la venta
      return null;
    })
    .filter((item) => item !== null);

  console.log("Combined Data:", combinedData);

  return (
    <div>
      {combinedData.map((data) => (
        <div key={data.id} className="bg-purple-100 p-4 rounded-md mb-4">
          <p>
            <strong>Cliente RUT:</strong> {data.cliente}
          </p>
          <p>
            <strong>Razón Social:</strong> {data.razon_social}
          </p>
          <p>
            <strong>Neto:</strong> ${data.neto}
          </p>
          <p>
            <strong>Fecha Visita:</strong>{" "}
            {typeof data.fecha_visita === "string"
              ? new Date(data.fecha_visita).toLocaleDateString("en-CA")
              : "No visit found"}
          </p>
        </div>
      ))}
    </div>
  );
};
