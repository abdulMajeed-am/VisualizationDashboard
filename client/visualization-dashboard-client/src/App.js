import React, { useState, useEffect } from 'react';
import './App.css';
import jsondata from './jsondata.json';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import ComprehensiveChartComponent from './components/Charts/ComprehensiveChartComponent';
import BarChartComponent from './components/Charts/BarChartComponent';
import LineChartComponent from './components/Charts/LineChartComponent';
import PieChartComponent from './components/Charts/PieChartComponent';
import ScatterChartComponent from './components/Charts/ScatterChartComponent';

function App() {
  const [filteredData, setFilteredData] = useState(jsondata);
  const [gridLayout, setGridLayout] = useState(false);

  const [endYear, setEndYear] = useState('');
  const [topic, setTopic] = useState('');
  const [sector, setSector] = useState('');
  const [region, setRegion] = useState('');
  const [pestle, setPestle] = useState('');
  const [source, setSource] = useState('');
  const [swot, setSwot] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    let filtered = jsondata;
    if (endYear) filtered = filtered.filter(d => d.end_year === endYear);
    if (topic) filtered = filtered.filter(d => d.topic === topic);
    if (sector) filtered = filtered.filter(d => d.sector === sector);
    if (region) filtered = filtered.filter(d => d.region === region);
    if (pestle) filtered = filtered.filter(d => d.pestle === pestle);
    if (source) filtered = filtered.filter(d => d.source === source);
    if (swot) filtered = filtered.filter(d => d.swot === swot);
    if (country) filtered = filtered.filter(d => d.country === country);
    if (city) filtered = filtered.filter(d => d.city === city);
    setFilteredData(filtered);
  }, [endYear, topic, sector, region, pestle, source, swot, country, city]);

  return (
    <div className="App">
      <TopBar gridLayout={gridLayout} setGridLayout={setGridLayout} />
      <div className="Main-Container">
        <SideBar 
          endYear={endYear} setEndYear={setEndYear}
          topic={topic} setTopic={setTopic}
          sector={sector} setSector={setSector}
          region={region} setRegion={setRegion}
          pestle={pestle} setPestle={setPestle}
          source={source} setSource={setSource}
          swot={swot} setSwot={setSwot}
          country={country} setCountry={setCountry}
          city={city} setCity={setCity}
        />
        <div className={`MainBar ${gridLayout ? 'grid-layout' : ''}`}>
          <ComprehensiveChartComponent data={filteredData} gridLayout={gridLayout} />
          <BarChartComponent data={filteredData} title="Country & Intensity" dataKeyX="country" dataKeyY="intensity" />
          <BarChartComponent data={filteredData} title="Sector & Likelihood" dataKeyX="sector" dataKeyY="likelihood" />
          <LineChartComponent data={filteredData} title="Relevance & Start and End Year" dataKeyX="relevance" lineKeys={["start_year", "end_year"]} />
          <PieChartComponent data={filteredData} title="Sector v/s Impact Pie Chart" dataKey="impact" nameKey="sector" />
          <ScatterChartComponent data={filteredData} title="Relevance & Intensity Scatter Chart" dataKeyX="relevance" dataKeyY="intensity" />
        </div>
      </div>
    </div>
  );
}

export default App;
