import React, { useState } from "react";
import FIIDIIChart from "./FIIDIIChart";

const FIIDIIActivity = () => {
  const [number, setNumber] = useState(7);

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value > 0) {
      setNumber(value);
    }
  };

  return (
    <div>
      <h1>FIIDII Activity</h1>
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
        <FIIDIIChart number={number} />
      </div>
    </div>
  );
};

export default FIIDIIActivity;
