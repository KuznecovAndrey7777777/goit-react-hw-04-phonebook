import React from 'react';
import './Filter.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className="Filter">
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default Filter;
