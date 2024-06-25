import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

const LineChart = ({ data }) => {
  const years = [...new Set(data.map(item => item.start_year))].filter(year => year);
  const relevanceData = years.map(year => {
    const yearData = data.filter(item => item.start_year === year);
    return yearData.reduce((sum, item) => sum + item.relevance, 0) / yearData.length;
  });

  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'Relevance',
        data: relevanceData,
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
