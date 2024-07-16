import React from "react";
import { FiThermometer } from "react-icons/fi";
import "./MarketBreadthIndicator.css"; // Import the CSS file

const MarketBreadthIndicator = () => {
  return (
    <div className="market-breadth-indicator">
      MarketBreadthIndicator
      <div className="icon-container">
        <FiThermometer className="large-icon" />
      </div>
    </div>
  );
};

export default MarketBreadthIndicator;
