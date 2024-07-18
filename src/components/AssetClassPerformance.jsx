import React, { useState } from "react";
import AssetClassperformanceChart from "./AssetClassperformanceChart";
import "../../src/style.css";

const AssetClassPerformance = () => {
  const [number, setNumber] = useState(7);

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setNumber(value);
    }
  };

  return (
    <div className="component-container">
      <h1>Asset Class Performance</h1>
      <div className="input-section">
        <label htmlFor="dataPoints">Number of Data Points:</label>
        <input
          id="dataPoints"
          type="number"
          value={number}
          onChange={handleInputChange}
          min="1"
        />
      </div>
      <div className="chart-section">
        <AssetClassperformanceChart number={number} />
      </div>
    </div>
  );
};

export default AssetClassPerformance;
