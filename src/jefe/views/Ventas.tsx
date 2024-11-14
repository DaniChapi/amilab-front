// Ventas.tsx
import React, { useState } from 'react';
import VentasTotales from './VentasTotales';
import VentasPorVendedor from './VentasPorVendedor';
import './App.css';

const Ventas: React.FC = () => {
  const [showVentasPorVendedor, setShowVentasPorVendedor] = useState(false);

  // Función para alternar entre las vistas
  const toggleView = () => {
    setShowVentasPorVendedor(!showVentasPorVendedor);
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="ventas-title">Ventas</h1>
      </header>

      <section className="content">
        {/* Renderizado condicional de las vistas */}
        {showVentasPorVendedor ? (
          <VentasPorVendedor onToggleView={toggleView} />
        ) : (
          <VentasTotales onToggleView={toggleView} />
        )}
      </section>
    </div>
  );
};

export default Ventas;
