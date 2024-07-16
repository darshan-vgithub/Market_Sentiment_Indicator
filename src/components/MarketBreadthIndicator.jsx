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
            {/* Thermometer outline */}
            <path
              d="M30 50 Q30 20 50 20 Q70 20 70 50 V320 Q70 350 50 350 Q30 350 30 320 Z"
              fill="white"
              stroke="#ccc"
              strokeWidth="2"
            />
            {/* Rounded top */}
            <path
              d="M30 50 Q30 20 50 20 Q70 20 70 50"
              fill="white"
              stroke="#ccc"
              strokeWidth="2"
            />
            {/* Bulb */}
            <circle
              cx="50"
              cy="350"
              r="30"
              fill="white"
              stroke="#ccc"
              strokeWidth="2"
            />
            {/* Mercury */}
            <rect
              x="35"
              y={350 - value * 3.3}
              width="30"
              height={value * 3.3 + 30}
              fill={rangeData.color}
              rx="15"
            />
            {/* Bulb fill */}
            <circle cx="50" cy="350" r="28" fill={rangeData.color} />
            {/* Scale lines */}
            {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((mark) => (
              <line
                key={mark}
                x1="70"
                y1={350 - mark * 3.3}
                x2="75"
                y2={350 - mark * 3.3}
                stroke="#ccc"
                strokeWidth="1"
              />
            ))}
          </svg>
          <div className="temperature-scale">
            {[100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0].map((temp) => (
              <div
                key={temp}
                className="scale-mark"
                style={{ bottom: `${temp * 3.3}px` }}
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
