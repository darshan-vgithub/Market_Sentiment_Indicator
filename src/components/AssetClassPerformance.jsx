import React, { useState } from "react";
import AssetClassperformanceChart from "./AssetClassperformanceChart";

const AssetClassPerformance = () => {
  const [number, setNumber] = useState(7);

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setNumber(value);
    }
  };

  return (
    <div>
      <h1>Asset Class Performance</h1>
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
};

export default AssetClassPerformance;
