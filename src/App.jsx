import React from "react";
import MarketSentimentIndicator from "./components/MarketSentimentIndicator";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MarketBreadthIndicator from "./components/MarketBreadthIndicator";
import FIIDIIActivity from "./components/FIIDIIActivity";
import AssetClassPerformance from "./components/AssetClassPerformance";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<MarketSentimentIndicator />}
          />
          <Route
            path="/MarketBreadthIndicator"
            element={<MarketBreadthIndicator />}
          />
          <Route path="/FIIDIIActivity" element={<FIIDIIActivity />} />
          <Route
            path="/AssetClassPerformance"
            element={<AssetClassPerformance />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
