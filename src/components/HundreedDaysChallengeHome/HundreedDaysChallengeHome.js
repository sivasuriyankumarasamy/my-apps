import React from "react";
import { Link } from "react-router-dom";
import { cssChallengeData } from "../../Data/CSSChallengeData";
import styles from "./HundreedDaysChallengeHome.module.css";

const HundreedDaysChallengeHome = () => {
  const links = cssChallengeData.map((data) => (
    <Link to={data.componentPath} alt="">
      {data.comonentName}
    </Link>
  ));
  return <div className={styles.HundreedDaysChallengeHome}>{links}</div>;
};

export default HundreedDaysChallengeHome;
