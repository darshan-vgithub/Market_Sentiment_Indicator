import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MarketSentimentIndicator from "./components/MarketSentimentIndicator";
import MarketBreadthIndicator from "./components/MarketBreadthIndicator";
import FIIDIIActivity from "./components/FIIDIIActivity";
import AssetClassPerformance from "./components/AssetClassPerformance";
import "../src/global.css";
import Home from "./Page/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomeWithNavbar /> // Render Home component with Navbar
            }
          />
          <Route
            path="/MarketSentimentIndicator"
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

// Component that renders Home with Navbar
const HomeWithNavbar = () => {
  const location = useLocation();

  // Check if the current location is the home page ('/')
  const isHomePage = location.pathname === "/";

  return (
    <div>
      {/* Render Navbar only if it's not the home page */}
      {!isHomePage && <Navbar />}
      <Home />
    </div>
  );
};

export default App;
