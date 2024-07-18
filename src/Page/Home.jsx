import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Home.module.css"; // Create a CSS file for styling

const Home = () => {
return (
  <div className={styles.home}>
    <div className={styles.card}>
      <Link to="/MarketSentimentIndicator" className={styles.cardLink}>
        <div className={styles.cardContent}>
          <h2>Market Sentiment Indicator</h2>
          <p>View market sentiment trends and analysis.</p>
        </div>
      </Link>
    </div>
    <div className={styles.card}>
      <Link to="/MarketBreadthIndicator" className={styles.cardLink}>
        <div className={styles.cardContent}>
          <h2>Market Breadth Indicator</h2>
          <p>Explore market breadth and volume insights.</p>
        </div>
      </Link>
    </div>
    <div className={styles.card}>
      <Link to="/FIIDIIActivity" className={styles.cardLink}>
        <div className={styles.cardContent}>
          <h2>FIIDII Activity</h2>
          <p>Track foreign institutional and domestic investor activities.</p>
        </div>
      </Link>
    </div>
    <div className={styles.card}>
      <Link to="/AssetClassPerformance" className={styles.cardLink}>
        <div className={styles.cardContent}>
          <h2>Asset Class Performance</h2>
          <p>Check the performance of different asset classes.</p>
        </div>
      </Link>
    </div>
  </div>
);
}

export default Home
