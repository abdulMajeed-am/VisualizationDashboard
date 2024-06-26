import React from 'react';

const FilterBar = ({
  endYear, setEndYear, topic, setTopic, sector, setSector, region, setRegion,
  pestle, setPestle, source, setSource, swot, setSwot, country, setCountry, city, setCity
}) => {
  return (
    <div className='FilterBar'>
      <input type="text" placeholder="End Year" value={endYear} onChange={e => setEndYear(e.target.value)} />
      <input type="text" placeholder="Topic" value={topic} onChange={e => setTopic(e.target.value)} />
      <input type="text" placeholder="Sector" value={sector} onChange={e => setSector(e.target.value)} />
      <input type="text" placeholder="Region" value={region} onChange={e => setRegion(e.target.value)} />
      <input type="text" placeholder="PEST" value={pestle} onChange={e => setPestle(e.target.value)} />
      <input type="text" placeholder="Source" value={source} onChange={e => setSource(e.target.value)} />
      <input type="text" placeholder="SWOT" value={swot} onChange={e => setSwot(e.target.value)} />
      <input type="text" placeholder="Country" value={country} onChange={e => setCountry(e.target.value)} />
      <input type="text" placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
    </div>
  );
}

export default FilterBar;
