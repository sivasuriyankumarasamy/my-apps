import React from "react";
import { Link } from "react-router-dom";
import styles from "./HundreedDayChallenge1.module.css";

const HundreedDayChallenge1 = () => (
  <>
    <Link to="/hundreeddayCSS" alt="">
      back
    </Link>
    <div className={styles.frame}>
      <div className={styles.center}>
        <div className={styles.number}>
          <span className={styles.oneOne}></span>
          <span className={styles.oneTwo}></span>
          <span className={styles.zeroOne}></span>
          <span className={styles.zeroTwo}></span>
        </div>
        <span className={styles.days}>DAYS</span>
        <span className={styles.cssChallenge}>CSS CHALLENGE</span>
      </div>
    </div>
  </>
);

HundreedDayChallenge1.propTypes = {};

HundreedDayChallenge1.defaultProps = {};

export default HundreedDayChallenge1;
