import React from "react";
import { Link } from "react-router-dom";
import styles from "../../components/Navbar/navbar.module.css";
import { MdHome } from "react-icons/md";
import { LuGauge } from "react-icons/lu";
import { FaThermometerEmpty } from "react-icons/fa";
import { MdOutlineAutoGraph } from "react-icons/md";
import { VscGraphLine } from "react-icons/vsc";

const Menu = ({ isOpen, toggleMenu }) => {
  return (
    <div id={styles.menu} className={isOpen ? styles.active : ""}>
      <ul>
        <li>
          <Link to={"/"} onClick={toggleMenu}>
            <MdHome />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to={"/MarketSentimentIndicator"} onClick={toggleMenu}>
            <LuGauge />
            <span>Market Sentiment Indicator</span>
          </Link>
        </li>
        <li>
          <Link to={"/MarketBreadthIndicator"} onClick={toggleMenu}>
            <FaThermometerEmpty />
            <span>Market Breadth Indicator</span>
          </Link>
        </li>
        <li>
          <Link to={"/FIIDIIActivity"} onClick={toggleMenu}>
            <MdOutlineAutoGraph />
            <span>FIIDII Activity</span>
          </Link>
        </li>
        <li>
          <Link to={"/AssetClassPerformance"} onClick={toggleMenu}>
            <VscGraphLine />
            <span>Asset Class Performance</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
