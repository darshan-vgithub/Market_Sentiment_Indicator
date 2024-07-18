import React, { useState } from "react";
import "../../src/style.css";
import Navbar from "./Navbar/Navbar";

const MarketBreadthIndicator = () => {
  const [value, setValue] = useState(0);

  const ranges = [
    { title: "Extreme Fear", color: "#ff565b", range: [0, 20] },
    { title: "Fear", color: "#ffa947", range: [20, 40] },
    { title: "Neutral", color: "#ffca15", range: [40, 60] },
    { title: "Greed", color: "#c5d335", range: [60, 80] },
    { title: "Extreme Greed", color: "#6bc548", range: [80, 100] },
  ];

  const getRangeData = (value) => {
    for (let range of ranges) {
      if (value >= range.range[0] && value <= range.range[1]) {
        return range;
      }
    }
    return ranges[ranges.length - 1]; // Return Extreme Greed for 100
  };

  const handleChange = (e) => {
    const inputValue = parseInt(e.target.value, 10);
    if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 100) {
      setValue(inputValue);
    } else {
      setValue(0);
    }
  };

  const rangeData = getRangeData(value);

  return (
    <div className="component-container">
      <Navbar />
      <h1>Market Breadth Indicator</h1>
      <div className="input-section">
        <label htmlFor="value">Enter a value (0-100):</label>
        <input
          id="value"
          type="number"
          value={value}
          onChange={handleChange}
          min="0"
          max="100"
        />
      </div>
      <div className="details-section" style={{ color: rangeData.color }}>
        {rangeData.title}
      </div>
      <div className="chart-section">
        <div className="icon-container">
          <div className="thermometer-wrapper">
            <svg viewBox="0 0 120 400" className="thermometer-svg">
              {[100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0].map((temp) => (
                <text
                  key={temp}
                  x="1"
                  y={350 - temp * 3.3 + 5}
                  className="scale-number"
                >
                  {temp}
                </text>
              ))}
              {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((mark) => (
                <line
                  key={mark}
                  x1="20"
                  y1={350 - mark * 3.3}
                  x2="30"
                  y2={350 - mark * 3.3}
                  stroke="#ccc"
                  strokeWidth="1"
                />
              ))}
              <path
                d="M40 50 Q40 20 70 20 Q100 20 100 50 V320 Q100 350 70 350 Q40 350 40 320 Z"
                fill="white"
                stroke="#ccc"
                strokeWidth="3"
              />
              <path
                d="M40 50 Q40 20 70 20 Q100 20 100 50"
                fill="white"
                stroke="#ccc"
                strokeWidth="3"
              />
              <circle
                cx="70"
                cy="350"
                r="45"
                fill="white"
                stroke="#ccc"
                strokeWidth="3"
              />
              <rect
                x="42"
                y={350 - value * 3.3}
                width="56"
                height={value * 3.3 + 30}
                fill={rangeData.color}
                rx="25"
              />
              <circle cx="70" cy="350" r="42" fill={rangeData.color} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketBreadthIndicator;
