import React from "react";
import styles from "./styles.module.scss";

const Navigation = (props, context) => (
  <div className={styles.navigation}>
    <ul className={styles.list}>
      <li className={styles.listItem}>홈</li>
      <li className={styles.listItem}>스토리</li>
      <li className={styles.listItem}>프로덕트</li>
      <li className={styles.listItem}>일정</li>
    </ul>
  </div>
);


export default Navigation;