import React from "react";
import styles from "./Navigation.module.css";

const menuItems = ["menu", "about", "contact", "delivery"];

const Navigation = () => (
  <ul className={styles.list}>
    {menuItems.map(item => (
      <li key={item} className={styles.listItem}>
        <a href="/">{item}</a>
      </li>
    ))}
  </ul>
);

export default Navigation;
