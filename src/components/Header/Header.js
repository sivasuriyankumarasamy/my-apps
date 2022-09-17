import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => (
  <div className={styles.Header}>
    <Link to={"/home"}> Back to App Dash Board</Link>
    Header Component
  </div>
);

export default Header;
