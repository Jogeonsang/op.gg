import React from 'react';
import styles from './styles.module.scss';

const ChampionInfo = ({
    participants,
    participant
}) => {
    const userList = participants.filter(userList => {
        if(participant[0].participantId === userList.participantId) {
            console.log(userList)
            return userList
    }
});
// const { championId, spell1Id, spell2Id, stats} = userList;
// const { assists, champLevel, deaths, kills, totalMinionsKilled, neutralMinionsKilled } = stats;
return (
        <div>{userList[0].championId}</div>
    )
}

export default ChampionInfo
// participants.map(userList => {
//     if(participant[0].participantId === userList.participantId) {
//         const { championId, spell1Id, spell2Id, stats} = userList;
//         const { assists, champLevel, deaths, kills, totalMinionsKilled, neutralMinionsKilled } = stats;
//         return (
//             <div>{championId}</div>
//         );
//     }
// });
