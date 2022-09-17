import React, { useState } from "react";
import styles from "./HundreedDayChallenge2.module.css";
import { Link } from "react-router-dom";

const HundreedDayChallenge2 = () => {
  const [animate, updateAnimate] = useState("");
  const [animateRev, updateAnimateRev] = useState("");
  const action = () => {
    if (animate === "") {
      updateAnimate(false);
      updateAnimateRev(false);
    } else if (!animate) {
      updateAnimateRev(false);
      updateAnimate(true);
    } else {
      updateAnimateRev(true);
      updateAnimate(false);
    }
  };
  return (
    <>
      <Link to="/hundreeddayCSS" alt="">
        back
      </Link>
      <div className={styles.frame}>
        <div className={styles.center} onClick={action}>
          <div
            className={`${styles.line} ${animate ? styles.animate1 : ""}
          
          ${animateRev ? styles.animateRev1 : ""}`}
          ></div>
          <div
            className={`${styles.line} ${animate ? styles.animate2 : ""}  ${
              animateRev ? styles.animateRev2 : ""
            }`}
          ></div>
          <div
            className={`${styles.line} ${animate ? styles.animate3 : ""} 
          ${animateRev ? styles.animateRev3 : ""}`}
          ></div>
        </div>
      </div>
    </>
  );
};
export default HundreedDayChallenge2;
