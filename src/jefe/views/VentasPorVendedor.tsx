
// VentasPorVendedor.tsx
import React, { useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import './App.css';

type Month = 'ENERO' | 'FEBRERO' | 'MARZO' | 'ABRIL' | 'MAYO' | 'JUNIO' | 'JULIO' | 'AGOSTO' | 'SEPTIEMBRE' | 'OCTUBRE' | 'NOVIEMBRE' | 'DICIEMBRE';
type Year = '2024' | '2023';
type Vendedor = 'mmg' | 'gpc' | 'hgc';

interface MesData {
  meta: number;
  venta: number;
}

interface AñoData {
  [month: string]: MesData;
}

interface VendedorData {
  [year: string]: AñoData;
}

interface VentasPorVendedorProps {
  onToggleView: () => void; // Prop para alternar la vista
}

// Datos de ventas anuales por categoría
const ventasAnuales = {
  CORE: 40,
  MICROBIOLOGIA: 25,
  INSUMOS: 20,
  OTROS: 15,
};

// Datos de ventas por cada vendedor, año y mes
const ventasPorVendedor: Record<Vendedor, VendedorData> = {
  mmg: {
    '2024': {
      ENERO: { meta: 300, venta: 250 },
      FEBRERO: { meta: 320, venta: 280 },
      MARZO: { meta: 330, venta: 290 },
      ABRIL: { meta: 340, venta: 310 },
      MAYO: { meta: 350, venta: 330 },
      JUNIO: { meta: 360, venta: 340 },
      JULIO: { meta: 370, venta: 355 },
      AGOSTO: { meta: 380, venta: 360 },
      SEPTIEMBRE: { meta: 390, venta: 370 },
      OCTUBRE: { meta: 400, venta: 375 },
      NOVIEMBRE: { meta: 410, venta: 380 },
      DICIEMBRE: { meta: 420, venta: 390 },
    },
    '2023': {
      ENERO: { meta: 280, venta: 240 },
      FEBRERO: { meta: 310, venta: 270 },
      // Agrega los datos restantes de cada mes para 2023
    },
  },
  gpc: {
    '2024': {
      ENERO: { meta: 310, venta: 260 },
      FEBRERO: { meta: 330, venta: 290 },
      // Agrega los datos restantes de cada mes para 2024
    },
    // Agrega los datos de otros años si es necesario
  },
  hgc: {
    '2024': {
      ENERO: { meta: 320, venta: 270 },
      FEBRERO: { meta: 340, venta: 300 },
      // Agrega los datos restantes de cada mes para 2024
    },
    // Agrega los datos de otros años si es necesario
  },
};

const months = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'] as Month[];

const VentasPorVendedor: React.FC<VentasPorVendedorProps> = ({ onToggleView }) => {
  const [selectedVendedor, setSelectedVendedor] = useState<Vendedor | null>(null);
  const [selectedYear, setSelectedYear] = useState<Year | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<Month | null>(null);

  const handleVendedorClick = (vendedor: Vendedor) => {
    setSelectedVendedor(vendedor === selectedVendedor ? null : vendedor);
    setSelectedYear(null);
    setSelectedMonth(null);
  };

  const handleYearClick = (year: Year) => {
    setSelectedYear(year === selectedYear ? null : year);
    setSelectedMonth(null);
  };

  return (
    <div className="app">
      <header className="header-vendedor">
        <h1 className="vendedor-title">Ventas por Vendedor</h1>
        <button className="totales-button" onClick={onToggleView}>
          Ventas Totales
        </button>
      </header>

      <section className="content">
        {/* Selección de Vendedor */}
        <div className="vendedor-dropdowns">
          {(['mmg', 'gpc', 'hgc'] as Vendedor[]).map((vendedor) => (
            <div key={vendedor}>
              <button
                className={`vendedor-button ${selectedVendedor === vendedor ? 'active' : ''}`}
                onClick={() => handleVendedorClick(vendedor)}
              >
                {vendedor}
              </button>

              {/* Selección de Año dentro de cada Vendedor */}
              {selectedVendedor === vendedor && (
                <div className="year-dropdowns">
                  {(['2024', '2023'] as Year[]).map((year) => (
                    <div key={year}>
                      <button
                        className={`year-button ${selectedYear === year ? 'active' : ''}`}
                        onClick={() => handleYearClick(year)}
                      >
                        {year}
                      </button>

                      {/* Gráfico circular de ventas anuales por categoría */}
                      {selectedYear === year && (
                        <div className="doughnut-chart">
                          <h3>COMPOSICION ANUAL - {year}</h3>
                          <Doughnut
                            data={{
                              labels: ['CORE', 'MICROBIOLOGIA', 'INSUMOS', 'OTROS'],
                              datasets: [
                                {
                                  data: [ventasAnuales.CORE, ventasAnuales.MICROBIOLOGIA, ventasAnuales.INSUMOS, ventasAnuales.OTROS],
                                  backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                                },
                              ],
                            }}
                            options={{
                              plugins: {
                                legend: {
                                  display: true,
                                  position: 'top',
                                },
                              },
                            }}
                          />
                        </div>
                      )}

                      {/* Selección de Mes dentro de cada Año */}
                      {selectedYear === year && (
                        <div className="month-dropdowns">
                          {months.map((month) => (
                            <div key={month}>
                              <button
                                className={`month-button ${selectedMonth === month ? 'active' : ''}`}
                                onClick={() => setSelectedMonth(selectedMonth === month ? null : month)}
                              >
                                {month}
                              </button>

                              {/* Mostrar gráficos solo si el mes está seleccionado */}
                              {selectedMonth === month && selectedVendedor && selectedYear && ventasPorVendedor[selectedVendedor][selectedYear][month] && (
                                <div className="charts">
                                  <div className="bar-chart">
                                    <h3>VENTA GLOBAL [M$] - {month}</h3>
                                    <Bar
                                      data={{
                                        labels: ['Meta', 'Venta'],
                                        datasets: [
                                          {
                                            label: 'Venta Global [M$]',
                                            data: [
                                              ventasPorVendedor[selectedVendedor][selectedYear][month].meta,
                                              ventasPorVendedor[selectedVendedor][selectedYear][month].venta,
                                            ],
                                            backgroundColor: ['#FF6384', '#36A2EB'],
                                          },
                                        ],
                                      }}
                                    />
                                  </div>

                                  <div className="doughnut-chart">
                                    <h3>COMPOSICION - {month}</h3>
                                    <Doughnut
                                      data={{
                                        labels: ['CORE', 'MICROBIOLOGIA', 'INSUMOS', 'OTROS'],
                                        datasets: [
                                          {
                                            data: [40, 20, 25, 15],
                                            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                                          },
                                        ],
                                      }}
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VentasPorVendedor;
