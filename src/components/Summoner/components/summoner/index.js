import React from "react";
import styles from "./styles.module.scss";
import moment from "moment";
import "moment/locale/ko";

moment.locale("ko");
const Summoner = ({ summonerInfo }) => {
  return (
    <div className={styles.summonerBox}>
      <div className={styles.summonerProfileImg}>
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/${
            summonerInfo.profileIconId
          }.png`}
          alt="profile"
        />
      </div>
      <div className={styles.summonerInfo}>
        <div className={styles.summonerName}>{summonerInfo.name}</div>
        <div className={styles.summonerLevel}>
          레벨 {summonerInfo.summonerLevel}
        </div>
        <div className={styles.summonerDivisionTime}>
          최근 접속시간 {`${moment(summonerInfo.revisionDate).fromNow()}`}
        </div>
      </div>
    </div>
  );
};

export default Summoner;
