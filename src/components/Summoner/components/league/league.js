import React from 'react';
import styles from './league.module.scss';

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
            <div className={styles.TierBox_solo}>
                <div className={styles.solo_league_tier}>
                    <img src={require(`images/RankTier/${rank_solo[0].tier}.png`)} className={styles.solo_tier_image} />
                </div>
                <div className={styles.solo_league_info}>
                    <div className={styles.solo_rank_tier}>
                        {rank_solo[0].tier} {rank_solo[0].rank}
                    </div>
                    <span className={styles.solo_point}>{rank_solo[0].leaguePoints} LP </span>
                    <span className={styles.solo_winlose}>/ {rank_solo[0].wins}승 {rank_solo[0].losses} 패</span>
                    <div className={styles.solo_rate}>승률 {Math.floor(rank_solo[0].wins / (rank_solo[0].wins+rank_solo[0].losses) * 100)}%</div>
                    <div className={styles.solo_leagueName}>{rank_solo[0].leagueName}</div>
                </div>
            </div>
            <div className={styles.TierBox_team}>
                <div className={styles.team_league_tier}>
                    <img src={require(`images/RankTier/${rank_team[0].tier}.png`)}/>
                </div>
                <div className={styles.team_league_info}>
                    <div className={styles.team_rank_tier}>
                        {rank_team[0].tier} {rank_team[0].rank}
                        <div className={styles.team_point}> {rank_team[0].leaguePoints} LP</div>
                    </div>
                    <div className={styles.team_TypeTeam}>
                        <div className={styles.team_rankType}> 자유 5:5 랭크</div>
                        <div className={styles.team_leagueName}> {rank_team[0].leagueName} </div>
                    </div>
                    <div className={styles.team_winloseInfo}>
                        <div className={styles.team_winlose}> {rank_team[0].wins}승 {rank_team[0].losses}패</div>
                        <div className={styles.team_winratio}> 승률{Math.floor(rank_team[0].wins / (rank_team[0].wins+rank_team[0].losses) * 100)}%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default League