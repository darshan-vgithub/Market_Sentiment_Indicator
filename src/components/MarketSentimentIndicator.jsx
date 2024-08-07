import React, { useState, useEffect } from "react";
import GaugeChart from "react-gauge-chart";
import "../../src/style.css";

const marketSentimentData = [
  { title: "Extreme Fear", color: "#ff565b", range: [0, 20] },
  { title: "Fear", color: "#ffa947", range: [20, 40] },
  { title: "Neutral", color: "#ffca15", range: [40, 60] },
  { title: "Greed", color: "#c5d335", range: [60, 80] },
  { title: "Extreme Greed", color: "#6bc548", range: [80, 100] },
];

const MarketSentimentIndicator = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleScoreChange = (event) => {
    const newScore = parseInt(event.target.value, 10);
    setCurrentScore(Math.min(Math.max(newScore, 0), 100));
  };

  useEffect(() => {
    marketSentimentData.forEach(({ title, range }) => {
      if (range[0] <= currentScore && currentScore <= range[1]) {
        setSelectedTitle(title);
      }
    });
  }, [currentScore]);

  return (
    <div className="component-container">
      <h1>Market Sentiment Indicator</h1>
      <div className="input-section">
        <label htmlFor="score">Score Value:</label>
        <input
          id="score"
          type="number"
          value={currentScore}
          onChange={handleScoreChange}
          min="0"
          max="100"
        />
      </div>
      <div
        className="details-section"
        style={{
          color: marketSentimentData.find(
            (sentiment) => sentiment.title === selectedTitle
          )?.color,
        }}
      >
        {selectedTitle}
      </div>
      <div className="chart-section">
        <GaugeChart
          id="market-sentiment-gauge"
          nrOfLevels={20}
          percent={currentScore / 100}
          arcWidth={0.5}
          cornerRadius={3}
          colors={marketSentimentData.map(({ color }) => color)}
          hideText={true}
          style={{ width: "100%", height: "300px", margin: "0 auto" }}
        />
      </div>
    </div>
  );
};

export default MarketSentimentIndicator;
