import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { HomePageApplicationData } from "../../Data/HomePageApplicationData";

const Home = () => {
  const links = HomePageApplicationData.map((data) => (
    <Link to={data.componentPath} alt="">
      {data.comonentName}
    </Link>
  ));
  return <div className={styles.Home}>{links}</div>;
};

export default Home;
