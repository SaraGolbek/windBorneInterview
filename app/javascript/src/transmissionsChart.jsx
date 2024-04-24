//chart.jsx
import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';

const TransmissionsChart = ({ transmissions }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    if (transmissions.length > 0) {
      console.log(transmissions);
      buildChart();
    }
  }, [transmissions]);


  const buildChart = () => {
    const labels = transmissions.map(transmission => transmission.id);
    const altitudeData = transmissions.map(transmission => transmission.altitude);

    const ctx = document.getElementById('altitudeChart');
    chartRef.current = new Chart (ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Transmissions Altitude',
            data: altitudeData
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  };

  return (
    <div className="col-10 offset-1 mt-4">
      <h3 className="text-center mb-4">Transmissions' Altitudes</h3>
      <canvas id="altitudeChart"></canvas>
    </div>
  );
};

export default TransmissionsChart;