import React from "react";
import { Link } from "react-router-dom";
import styles from "../../components/Navbar/navbar.module.css";

const Menu = ({ isOpen, toggleMenu }) => {
  return (
    <div id={styles.menu} className={isOpen ? styles.active : ""}>
      <ul>
        <li>
          <Link to={"/"} onClick={toggleMenu}>
            Market Sentiment Indicator
          </Link>
        </li>
        <li>
          <Link to={"/MarketBreadthIndicator"} onClick={toggleMenu}>
            Market Breadth Indicator
          </Link>
        </li>
        <li>
          <Link to={"/FIIDIIActivity"} onClick={toggleMenu}>
            FIIDII Activity
          </Link>
        </li>
        <li>
          <Link to={"/AssetClassPerformance"} onClick={toggleMenu}>
            Asset Class Performance
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
