import React from "react";
import styles from "./header.module.css";

const Header = props => (
  <header className={styles.header}>
    <h1>Bakery Map</h1>
    <form className={styles.form}>
      <input
        className={styles.input}
        type='text'
        placeholder='Find a new bakery!'
      />
      <input className={styles.btn} type='button' value='SEARCH' />
    </form>
  </header>
);

export default Header;
