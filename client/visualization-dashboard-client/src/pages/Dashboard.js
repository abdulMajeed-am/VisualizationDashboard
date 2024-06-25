// src/pages/dashboard.js
import React from 'react';
import Filters from '../components/Filters';
import DataVisualization from '../components/DataVisualization';
import Chart from '../components/Chart';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Filters />
      <DataVisualization />
      <Chart />
    </div>
  );
};

export default Dashboard;
