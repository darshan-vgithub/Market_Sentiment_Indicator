import React, { useState } from 'react'
import AssetClassperformanceChart from './AssetClassperformanceChart';

const AssetClassPerformance = () => {
   const [number, setNumber] = useState(7); // Default number of points

   const handleInputChange = (event) => {
     const value = parseInt(event.target.value, 10);
     if (!isNaN(value) && value > 0) {
       setNumber(value);
     }
   };
  return (
    <div>
      <h1>AssetClassPerformance</h1>
      <div>
        <label htmlFor="dataPoints">Number of Data Points: </label>
        <input
          id="dataPoints"
          type="number"
          value={number}
          onChange={handleInputChange}
          min="1"
        />
      </div>
      <div>
        <AssetClassperformanceChart number={number} />
      </div>
    </div>
  );
}

export default AssetClassPerformance
