// src/App.js
import React from 'react';
import './App.css';
import DataInsightsD3 from './DataInsightsD3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Visualization Dashboard</h1>
        <DataInsightsD3 />
      </header>
    </div>
  );
}

export default App;
