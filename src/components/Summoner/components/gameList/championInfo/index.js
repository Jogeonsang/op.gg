import React from 'react';
import styles from './styles.module.scss';

const championInfo = ({
    participants,
    participant
}) => {
    return (
        <div>CHAMPIONINFO</div>
    )
    // leagueInfo.map(rank =>
    //     rank.queueType === 'RANKED_SOLO_5x5' ? (rank) => rank_solo : (rank) => rank_team)
}

export default championInfo
// participants.map(userList => {
//     if(participant[0].participantId === userList.participantId) {
//         const { championId, spell1Id, spell2Id, stats} = userList;
//         const { assists, champLevel, deaths, kills, totalMinionsKilled, neutralMinionsKilled } = stats;
//         return (
//             <div>{championId}</div>
//         );
//     }
// });
