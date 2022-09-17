import React from "react";
import { Link } from "react-router-dom";
import styles from "./HundreedDayChallenge3.module.css";

const HundreedDayChallenge3 = () => (
  <>
    <Link to="/hundreeddayCSS" alt="">
      back
    </Link>
    <div className={styles.frame}>
      <div className={styles.center}>
        <div className={styles.circle}>
          <div className={styles.sky}></div>
          <div className={styles.sun}></div>
          <div className={styles.triangle1}></div>
          <div className={styles.triangle2}></div>
          <div className={styles.ground}></div>
          <div className={styles.shadow}></div>
        </div>
      </div>
    </div>
  </>
);

export default HundreedDayChallenge3;
