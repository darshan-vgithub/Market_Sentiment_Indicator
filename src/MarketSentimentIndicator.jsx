import React, { useState } from "react";
import GaugeChart from "react-gauge-chart";
import "./style.css";

const marketSentimentData = [
  {
    title: "Extreme Fear",
    color: "#ff565b",
    range: [0, 20],
  },
  {
    title: "Fear",
    color: "#ffa947",
    range: [20, 40],
  },
  {
    title: "Neutral",
    color: "#ffca15",
    range: [40, 60],
  },
  {
    title: "Greed",
    color: "#c5d335",
    range: [60, 80],
  },
  {
    title: "Extreme Greed",
    color: "#6bc548",
    range: [80, 100],
  },
];

const MarketSentimentIndicator = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleScoreChange = (event) => {
    const newScore = parseInt(event.target.value, 10);
    setCurrentScore(Math.min(Math.max(newScore, 0), 120));
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter") {
      const newScore = parseInt(event.target.value, 10);
      setCurrentScore(Math.min(Math.max(newScore, 0), 120));
    }
  };

  React.useEffect(() => {
    marketSentimentData.forEach(({ title, range }) => {
      if (range[0] <= currentScore && currentScore <= range[1]) {
        setSelectedTitle(title);
      }
    });
  }, [currentScore]);

  return (
    <div className="market-sentiment-indicator">
      <div className="gauge-chart-container">
        <GaugeChart
          id="market-sentiment-gauge"
          nrOfLevels={20}
          percent={(currentScore - marketSentimentData[0].range[0]) / 120}
          arcWidth={0.5}
          cornerRadius={3}
          colors={marketSentimentData.map(({ color }) => color)}
          hideText={true}
          style={{
            width: "100%",
            height: "300px",
            margin: "0 auto",
          }}
        />
      </div>

      <div
        className="title-bar"
        style={{
          color: marketSentimentData.find(
            (sentiment) => sentiment.title === selectedTitle
          )?.color,
          textAlign: "center",
          fontSize: "24px",
          position: "relative",
          bottom: "200px",
        }}
      >
        {selectedTitle}
      </div>

      <div className="title-near-input" style={{ textAlign: "center" }}>
        <span className="score-value">Score Value:</span>
        <span>
          <input
            type="number"
            value={currentScore}
            onChange={handleScoreChange}
            onKeyPress={handleInputKeyPress}
          />
        </span>
      </div>
    </div>
  );
};

export default MarketSentimentIndicator;
