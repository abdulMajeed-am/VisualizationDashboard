import React from 'react';
import FilterBar from './FilterBar';

const SideBar = ({
  endYear, setEndYear, topic, setTopic, sector, setSector, region, setRegion,
  pestle, setPestle, source, setSource, swot, setSwot, country, setCountry, city, setCity
}) => {
  return (
    <div className='SideBar'>
      <a className="active" href="#home">Filters</a>
      <FilterBar
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
      <a href="#bar1">Country & Intensity</a>
      <a href="#bar1">Sector & Likelihood</a>
      <a href="#Line">Relevance & Start and End Year</a>
      <a href="#PieChart">Sector v/s Impact Pie Chart</a>
      <a href="#Line">Relevance & Intensity Scatter Chart</a>
    </div>
  );
}

export default SideBar;
