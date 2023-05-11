import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <h2>heliverse</h2>
      </div>
      <div className={styles.search}>
        <input type="text" placeholder="Search Electronics" />
      </div>
    </div>
  );
};

export default Header;
