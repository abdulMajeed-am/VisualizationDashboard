import React from 'react';

const TopBar = ({ gridLayout, setGridLayout }) => {
  return (
    <nav className="TopBar">
      <h1>Data Visualization Dashboard</h1>
      <button className='Switch' onClick={() => setGridLayout(!gridLayout)}>
        {gridLayout ? "Switch to Single Column" : "Switch to Grid Layout"}
      </button>
      <div className='Search'>
        <input type='search' placeholder='Search'></input>
        <button>Search</button>
      </div>
    </nav>
  );
}

export default TopBar;
