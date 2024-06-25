import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BarChart from './BarChart';
import PieChart from './PieChart';
import LineChart from './LineChart';
import Filters from './Filters';
import '../App.css';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    axios.get('/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredData = data.filter(item => {
    // Implement your filtering logic based on `filters` state
    return true; // Placeholder: return true to include all data for now
  });

  return (
    <div className="Dashboard">
      <Filters onFilterChange={handleFilterChange} />
      <div className="ChartContainer">
        <BarChart data={filteredData} />
      </div>
      <div className="ChartContainer">
        <PieChart data={filteredData} />
      </div>
      <div className="ChartContainer">
        <LineChart data={filteredData} />
      </div>
    </div>
  );
};

export default Dashboard;
