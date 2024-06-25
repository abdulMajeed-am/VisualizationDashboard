import React from 'react';
import '../App.css';


const Filters = ({ onFilterChange }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  return (
    <div className='Filters'>
      <label>
        End Year:
        <input type="text" name="endYear" onChange={handleFilterChange} />
      </label>
      <label>
        Topics:
        <input type="text" name="topics" onChange={handleFilterChange} />
      </label>
      <label>
        Sector:
        <input type="text" name="sector" onChange={handleFilterChange} />
      </label>
      <label>
        Region:
        <input type="text" name="region" onChange={handleFilterChange} />
      </label>
      <label>
        PEST:
        <input type="text" name="pest" onChange={handleFilterChange} />
      </label>
      <label>
        Source:
        <input type="text" name="source" onChange={handleFilterChange} />
      </label>
      <label>
        SWOT:
        <input type="text" name="swot" onChange={handleFilterChange} />
      </label>
      <label>
        Country:
        <input type="text" name="country" onChange={handleFilterChange} />
      </label>
      <label>
        City:
        <input type="text" name="city" onChange={handleFilterChange} />
      </label>
    </div>
  );
};

export default Filters;
