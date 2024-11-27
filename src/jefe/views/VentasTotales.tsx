// VentasTotales.tsx
import React, { useState } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './App.css';

type Month = 'ENERO' | 'FEBRERO' | 'MARZO' | 'ABRIL' | 'MAYO' | 'JUNIO' | 'JULIO' | 'AGOSTO' | 'SEPTIEMBRE' | 'OCTUBRE' | 'NOVIEMBRE' | 'DICIEMBRE';

interface VentasTotalesProps {
  onToggleView: () => void; // Definimos el tipo de la prop
}

const monthlyData: Record<Month, { meta: number; venta: number }> = {
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
};

const months = Object.keys(monthlyData) as Month[];
const ventasMensuales = months.map((month) => monthlyData[month].venta);
const metasMensuales = months.map((month) => monthlyData[month].meta);
const promedioAcumulado = ventasMensuales.map((_, index) =>
  Math.round(
    ventasMensuales.slice(0, index + 1).reduce((acc, curr) => acc + curr, 0) / (index + 1)
  )
);

const VentasTotales: React.FC<VentasTotalesProps> = ({ onToggleView }) => { // Aseguramos el tipo del componente
  const [showYear, setShowYear] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<Month | null>(null);

  return (
    <div className="app">
      <header className="header-vendedor">
        <h1 className="totales-title">Ventas Totales</h1>
        {/* Botón "Por Vendedor" que llama a onToggleView para cambiar de vista */}
        <button className="vendor-button" onClick={onToggleView}>
          Por Vendedor
        </button>
      </header>

      <section className="content">
        <button className="year-button" onClick={() => setShowYear(!showYear)} aria-expanded={showYear}>
          AÑO 2024 {showYear}
        </button>

        {showYear && (
          <>
            <div className="line-chart">
              <h3>Resumen Anual de Ventas</h3>
              <Line
                data={{
                  labels: months,
                  datasets: [
                    {
                      label: 'Meta',
                      data: metasMensuales,
                      borderColor: '#36A2EB',
                      borderWidth: 2,
                      fill: false,
                    },
                    {
                      label: 'Venta',
                      data: ventasMensuales,
                      borderColor: '#FF6384',
                      borderWidth: 2,
                      fill: false,
                    },
                    {
                      label: 'Promedio Acumulado',
                      data: promedioAcumulado,
                      borderColor: '#FFCE56',
                      borderWidth: 2,
                      fill: false,
                      borderDash: [5, 5],
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: false,
                      title: {
                        display: true,
                        text: 'Dólares',
                      },
                    },
                    x: {
                      title: {
                        display: true,
                        text: 'Meses',
                      },
                    },
                  },
                }}
              />
            </div>

            <div className="month-dropdowns">
              {months.map((month) => (
                <div key={month}>
                  <button
                    className={`month-button ${selectedMonth === month ? 'active' : ''}`}
                    onClick={() => setSelectedMonth(selectedMonth === month ? null : month)}
                  >
                    {month}
                  </button>

                  {selectedMonth === month && (
                    <div className="charts">
                      <div className="bar-chart">
                        <h3>VENTA GLOBAL [M$] - {month}</h3>
                        <Bar
                          data={{
                            labels: ['Meta', 'Venta'],
                            datasets: [
                              {
                                label: 'Venta Global [M$]',
                                data: [monthlyData[month].meta, monthlyData[month].venta],
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
          </>
        )}
      </section>
    </div>
  );
};

export default VentasTotales;
