import React from "react";
import { Link } from "react-router-dom";
import styles from "./HundreedDayChallenge4.module.css";

const HundreedDayChallenge4 = () => (
  <>
    <Link to="/hundreeddayCSS" alt="">
      back
    </Link>
    <div className={styles.frame}>
      <div className={styles.center}>
        <div className={`${styles.bigCircle} ${styles.center}`}></div>
        <div className={`${styles.medCircle} ${styles.center}`}></div>
        <div className={`${styles.smallCircle} ${styles.center}`}></div>
      </div>
    </div>
  </>
);

export default HundreedDayChallenge4;
