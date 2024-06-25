import React, { useState, useEffect } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import './App.css';
import axios from 'axios';
import jsondata from './jsondata.json';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
        axios.get('http://localhost:3000/getData') // Fetch data from your Express API
        .then(DataInsights => setData(DataInsights.data))
        .catch(err => console.log(err))
      
    });

  return (
    <div className="App">
      <nav className="TopBar">
        <h1>{console.log(data)}</h1>
        <p></p>
      </nav>
      <div className='Main-Container'>
        <div className='SideBar'>
          <a className="active" href="#home">Dashboard</a>
          <a href="#Country">Country</a>
          <a href="#Region">Region</a>
          <a href="#Sector">Sector</a>
          <a href="#">City</a>
          <a href="#">Logout</a>
        </div>
        <div className='MainBar'>
          <div className='bar1'>
          <h4>Country & Intensity</h4>
              <BarChart width={20000} height={300} data={jsondata}>
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis dataKey="country" />
                <YAxis dataKey="intensity"/>
                <Tooltip />
                <Legend />
                <Bar dataKey="intensity" fill="#8884d8" />
              </BarChart>
          </div>
          <div className='bar1'>
          <h4>Sector & Likelihood</h4>
              <BarChart width={20000} height={300} data={jsondata}>
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis dataKey="sector" />
                <YAxis dataKey="likelihood"/>
                <Tooltip />
                <Legend />
                <Bar dataKey="likelihood" fill="#8884d8" />
              </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
