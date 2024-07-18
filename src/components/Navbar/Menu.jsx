import React from "react";
import { Link } from "react-router-dom";
import styles from "../../components/Navbar/navbar.module.css";
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
            <LuGauge className={styles.icon} />
            <span className={styles.menuText}>Market Sentiment Indicator</span>
          </Link>
        </li>
        <li>
          <Link to={"/MarketBreadthIndicator"} onClick={toggleMenu}>
            <FaThermometerEmpty className={styles.icon} />
            <span className={styles.menuText}>Market Breadth Indicator</span>
          </Link>
        </li>
        <li>
          <Link to={"/FIIDIIActivity"} onClick={toggleMenu}>
            <MdOutlineAutoGraph className={styles.icon} />
            <span className={styles.menuText}>FIIDII Activity</span>
          </Link>
        </li>
        <li>
          <Link to={"/AssetClassPerformance"} onClick={toggleMenu}>
            <VscGraphLine className={styles.icon} />
            <span className={styles.menuText}>Asset Class Performance</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
