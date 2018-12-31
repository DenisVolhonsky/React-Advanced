import React from 'react';

const DropdownMenu = ({ allCategories, onSelect}) => (
  <label>
    Выберите категорию блюд:
    <select name="categories" defaultValue='...' onChange={onSelect} autoFocus>
      {allCategories.map(item =>
        item === '...' ? (
          <option key={item} value={item} disabled>
            {item}
          </option>
        ) : (
          <option key={item} value={item}>
            {item}
          </option>
        ),
      )}
    </select>
  </label>
);

export default DropdownMenu;
