import React from 'react';

const ResultMenu = ({ selectedCategories, deleteMenuItem }) => (
  <div>
    {selectedCategories.map(item => (
      <div key={item}>
        <span>{item}</span>
        <button type='button' onClick={()=>deleteMenuItem(item)}>
          close
        </button>
      </div>
    ))}
  </div>
);

export default ResultMenu;
