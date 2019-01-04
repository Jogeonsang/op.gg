import React from "react";
import moment from "moment";
import "moment/locale/ko";

import styles from "./styles.module.scss";
moment.locale("ko");
const GameInfo = ({ queueId, gameCreation, gameDuration, winlose }) => {
  const win = winlose ? "승리" : "패배";
  const queue = queueId === 440 ? "자유 5:5 랭크" : "솔랭";
  return (
    <div className={styles.championInfo}>
      <div className={styles.queue}>{queue}</div>
      <div className={styles.gameCreation}>{`${moment(
        gameCreation
      ).fromNow()}`}</div>
      <div className={styles.bar} />
      <div className={styles.winlose}>{win}</div>
      <div className={styles.gameDuration}>{`${moment({})
        .seconds(gameDuration)
        .format("mm분 ss초")}`}</div>
    </div>
  );
};

export default GameInfo;
