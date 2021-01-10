import React from "react";
import styles from "./header.module.css";

const Header = props => (
  <header className={styles.header}>
    <h1>Bakery Map</h1>
    <form className={styles.form}>
      <input
        className={`${styles.search} ${styles.search_form}`}
        type='text'
        placeholder='Find a new bakery!'
      />
      <button className={`${styles.search} ${styles.btn}`}>
        <img className={styles.img} src='images/search.png' alt='search icon' />
      </button>
    </form>
  </header>
);

export default Header;
