import React from 'react';
import league from '../../../redux/Summoner/league/reducer';
import styles from './league.module.scss';
import { type } from 'os';

const League = ({
    leagueInfo
}) => {
    let rank_solo = []
    let rank_team = []
    leagueInfo.map(rank => 
        rank.queueType === 'RANKED_SOLO_5x5' ? rank_solo.push(rank) : rank_team.push(rank)
    )
    // leagueInfo.map(rank =>
    //     rank.queueType === 'RANKED_SOLO_5x5' ? (rank) => rank_solo : (rank) => rank_team)
    return (
        <div className={styles.TierBox}>
            <div className={styles.solo_league_tier}>
                <img src={require(`images/RankTier/${rank_solo[0].tier}.png`)} className={styles.solo_tier_image} />
            </div>
            <div className={styles.solo_league_info}>
                <div className={styles.solo_rank_tier}>
                    {rank_solo[0].tier}{rank_solo[0].rank}
                </div>
                <div className={styles.solo_point}>{rank_solo[0].leaguePoints} LP</div>
                <div className={styles.solo_winlose}>/ {rank_solo[0].wins}승 {rank_solo[0].losses} 패</div>
                <div className={styles.solo_rate}>승률 51%</div>
                <div className={styles.solo_leagueName}>{rank_solo[0].leagueName}</div>
            </div>
        </div>
    )
}

export default League