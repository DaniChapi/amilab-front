import React, { useRef, useState } from 'react';
import Papa from 'papaparse'; // Use PapaParse for CSV parsing
import { client } from '../../supabase/client'; // Ensure the path is correct

// Function to normalize headers
const normalizeHeader = (str: string): string => {
  return str
    .normalize("NFD") // Normalize the text
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/\s+/g, '_') // Replace spaces with underscores
    .replace(/[^a-zA-Z0-9_]/g, '') // Remove unwanted characters
    .toLowerCase(); // Convert to lowercase
};

// Function to handle CSV import
const handleFileUpload = async (file: File, tableName: string, setLoading: React.Dispatch<React.SetStateAction<boolean>>, setError: React.Dispatch<React.SetStateAction<string | null>>) => {
  setLoading(true);
  const rows: any[] = [];

  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: async (results) => {
      results.data.forEach((row: any) => {
        const normalizedRow: any = {};
        Object.keys(row).forEach((key) => {
          normalizedRow[normalizeHeader(key)] = row[key];
        });
        rows.push(normalizedRow);
      });

      try {
        // Insert normalized rows into the corresponding table
        const { data, error } = await client
          .from(tableName)
          .insert(rows);

        if (error) throw error;
        console.log('Import successful:', data);
      } catch (error) {
        setError('Error importing data: ' + error);
      } finally {
        setLoading(false);
      }
    },
    error: (error) => {
      setError('Error parsing CSV: ' + error.message);
      setLoading(false);
    }
  });
};

export const importar = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImport = async (tableName: string) => {
    const fileInput = fileInputRef.current;
    if (fileInput && fileInput.files) {
      const file = fileInput.files[0];
      if (file) {
        await handleFileUpload(file, tableName, setLoading, setError);
        fileInput.value = ''; // Clear file selection
      }
    }
  };

  return (
    <div>
      <h2>Importar CSV</h2>
      <input type="file" accept=".csv" ref={fileInputRef} />
      <div>
        <button onClick={() => handleImport('sales')} disabled={loading}>Importar Ventas</button>
        <button onClick={() => handleImport('customers')} disabled={loading}>Importar Clientes</button>
        <button onClick={() => handleImport('deudores')} disabled={loading}>Importar Deudores</button>
        <button onClick={() => handleImport('sellers')} disabled={loading}>Importar Vendedores</button>
      </div>
      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};