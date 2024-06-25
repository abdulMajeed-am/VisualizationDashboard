import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

const BarChart = ({ data }) => {
  const countries = [...new Set(data.map(item => item.country))];
  const intensityData = countries.map(country => {
    const countryData = data.filter(item => item.country === country);
    return countryData.reduce((sum, item) => sum + item.intensity, 0);
  });

  const chartData = {
    labels: countries,
    datasets: [
      {
        label: 'Intensity',
        data: intensityData,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
