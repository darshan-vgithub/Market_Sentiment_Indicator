import React, { useState } from "react";
import "./MarketBreadthIndicator.css";

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
      if (value >= range.range[0] && value < range.range[1]) {
        return range;
      }
    }
    return { title: "" };
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
    <div className="market-breadth-indicator">
      <h1>Market Breadth Indicator</h1>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        placeholder="Enter a value (0-100)"
        max="100"
        min="0"
      />
      <div className="icon-container">
        <div className="range-title">{rangeData.title}</div>
        <div className="thermometer-wrapper">
          <svg viewBox="0 0 100 400" className="thermometer-svg">
            <rect
              x="30"
              y="10"
              width="40"
              height="350"
              rx="20"
              ry="20"
              fill="white"
              stroke="black"
              strokeWidth="2"
            />
            <circle
              cx="50"
              cy="350"
              r="30"
              fill="white"
              stroke="black"
              strokeWidth="2"
            />
            <rect x="45" y="20" width="10" height="330" fill="white" />
            <rect
              x="45"
              y={350 - value * 3.3}
              width="10"
              height={value * 3.3}
              fill={rangeData.color}
            />
            <circle cx="50" cy="350" r="20" fill={rangeData.color} />
          </svg>
          <div className="temperature-scale">
            {[0, 20, 40, 60, 80, 100].map((temp) => (
              <div
                key={temp}
                className="scale-mark"
                style={{ bottom: `${temp}%` }}
              >
                {temp}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketBreadthIndicator;
