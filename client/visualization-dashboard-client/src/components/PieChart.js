import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
  const sectors = [...new Set(data.map(item => item.sector))];
  const sectorCounts = sectors.map(sector => data.filter(item => item.sector === sector).length);

  const chartData = {
    labels: sectors,
    datasets: [
      {
        data: sectorCounts,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
