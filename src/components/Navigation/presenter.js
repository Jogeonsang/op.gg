import React from "react";
import styles from "./styles.module.scss";
import { Link } from 'react-router-dom';

const Navigation = (props, context) => (
  <div className={styles.navigation}>
    {/* <Link to="/"> */}
      <img
         src={`https://opgg-static.akamaized.net/images/logo/l_logo.png`}
         className={styles.logo}
         alt='logo'
      />
    {/* </Link> */}
    <ul className={styles.list}>
      <li className={styles.listItem}>홈</li>
      <li className={styles.listItem}>챔피언분석</li>
    </ul>
  </div>
);


export default Navigation;