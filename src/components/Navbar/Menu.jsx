import React from "react";
import { Link } from "react-router-dom";
import styles from "../../components/Navbar/navbar.module.css";

const Menu = () => {
  return (
    <div id={styles.menu}>
      <ul>
        <li>
          <Link to={"/"}>
            Market Sentiment Indicator
          </Link>
        </li>
        <li>
          <Link to={"/MarketBreadthIndicator"}>MarketBreadthIndicator</Link>
        </li>
        <li>
          <Link to={"/FIIDIIActivity"}>FIIDIIActivity</Link>
        </li>
        <li>
          <Link to={"/AssetClassPerformance"}>AssetClassPerformance</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
