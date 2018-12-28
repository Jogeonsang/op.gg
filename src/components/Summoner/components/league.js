import React from 'react';
import league from '../../../redux/Summoner/league/reducer';
import styles from './league.module.scss';

const League = ({
    leagueInfo
}) => {
    console.log(leagueInfo[0])
    return (
        <div className={styles.TierBox}>
            <div className={styles.solo_league}>
                <img src={require(`images/RankTier/${leagueInfo[0].tier}.png`)} className={styles.solo_tier_image} />
                <div className={styles.solo_tier_rank}>
                    {leagueInfo[0].tier} {leagueInfo[0].rank}
                </div>
                <div className={styles.solo_point}>{leagueInfo[0].leaguePoints}LP</div>
                <div className={styles.solo_winlose}>/{leagueInfo[0].wins}승 {leagueInfo[0].losses} 패</div>
                <div className={styles.solo_rate}>승률 51%</div>
                <div className={styles.solo_leagueName}>{leagueInfo[0].leagueName}</div>
            </div>
        </div>
    )
}

export default League