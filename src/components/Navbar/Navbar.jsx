import React from "react";
import Menu from "./Menu";
import styles from "../../components/Navbar/navbar.module.css"

const Navbar = () => {
  return (
    <div>
      <section id={styles.main}>
        <article>
          <Menu />
        </article>
      </section>
    </div>
  );
};

export default Navbar;
