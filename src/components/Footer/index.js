import React from "react";
import styles from './styles.module.scss';

const Footer = (props, context) => (
  <footer className={styles.footer}>
    <div className={styles.column}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.listItem}>About MARCUS.GG</li>
          <li className={styles.listItem}>로고 히스토리</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Facebook</li>
        </ul>
      </nav>
    </div>
    <div className={styles.column}>
      <span className={styles.copyright}>© 2018 MARCUS Data based on League of Legends Korea. </span>
    </div>
  </footer>
)

export default Footer
// import React from 'react';
// import './MyComponent.scss';

// const MyComponent = () => {
//   return (
//     <div className={styles}>
//       <div className="something-inside">Hello CRA v2</div>
//     </div>
//   );
// };

// export default MyComponent;