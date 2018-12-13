import React  from 'react';
import styles from './styles.module.scss';

const Home = props => (
    <div className={styles.container}>
          <img
            src={require("images/Home_img.png")}
            className={styles.logo}
             alt='logo'
          />
        <form className={styles.summoner_form}>
            <input className={styles.summoner_search}/>
        </form>
    </div>
)

export default Home