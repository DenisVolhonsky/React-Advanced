import React from 'react';

const FilterMenu = ({ onFilterChange, filter }) => (
  <div>
    <label>
      Filter:
      <input type="text" placeholder="name" value={filter} onChange={onFilterChange} />
    </label>
  </div>
);

export default FilterMenu;
