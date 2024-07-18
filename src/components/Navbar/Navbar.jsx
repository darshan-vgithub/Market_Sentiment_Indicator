import React, { useState } from "react";
import Menu from "./Menu";
import styles from "../../components/Navbar/navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <section id={styles.main}>
        <article>
          <div id={styles.hamburgerIcon} onClick={toggleMenu}>
            &#9776;
          </div>
          <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
        </article>
      </section>
    </div>
  );
};

export default Navbar;
