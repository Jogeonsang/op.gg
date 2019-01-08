import React from "react";
import styles from "./styles.module.scss";
const ChampionInfo = ({ userInfo, champions }) => {
  const championData = [];
  for (let i in champions.data) {
    if (champions.data[i].key == userInfo[0].championId) {
      championData.push(champions.data[i]);
    }
  }
  return (
    <div className={styles.userStat}>
      <div className={styles.profileBox}>
        <div className={styles.profile}>
          <img
            src={`http:////opgg-static.akamaized.net/images/lol/champion/${
              championData[0].id
            }.png`}
            alt="profile"
          />
        </div>
        <div className={styles.spellBox}>
          <img
            src={require(`images/SummonerSpell/${userInfo[0].spell1Id}.png`)}
            className={styles.spell}
            alt="spell1"
          />
          <img
            src={require(`images/SummonerSpell/${userInfo[0].spell2Id}.png`)}
            className={styles.spell}
            alt="spell1"
          />
        </div>
        <div className={styles.championName}>{championData[0].name}</div>
      </div>
      <div className={styles.kdaBox}>
        <div className={styles.kda}>
          <span className={styles.kill}>{userInfo[0].stats.kills}</span>
          <span> / </span>
          <span className={styles.death}>{userInfo[0].stats.deaths}</span>
          <span> / </span>
          <span className={styles.assist}>{userInfo[0].stats.assists}</span>
        </div>
        <div className={styles.kdaRatio}>
          <span className={styles.ratio}>
            {Math.round(
              ((userInfo[0].stats.kills + userInfo[0].stats.assists) /
                userInfo[0].stats.deaths) *
                100
            ) / 100}{" "}
            :1
          </span>
          <span className={styles.ratio_kr}> 평점</span>
        </div>
        <div className={styles.badge}>
          <div>
            {userInfo[0].stats.longestTimeSpentLiving > 1000 ? (
              <div className={styles.lifeKing}> 생존왕 </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className={styles.statsBox}>
        <div className={styles.level}>레벨 {userInfo[0].stats.champLevel}</div>
        <div className={styles.minion}>
          {userInfo[0].stats.totalMinionsKilled +
            userInfo[0].stats.neutralMinionsKilled}{" "}
          CS
        </div>
        <div className={styles.CKRate_tip}>킬관여 60%</div>
      </div>
      <div className={styles.itemBox}>
        {userInfo[0].stats.item0 ? (
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${
              userInfo[0].stats.item0
            }.png`}
            className={styles.item}
          />
        ) : (
          <img
            src={require(`images/pattern_opacity.png`)}
            className={styles.item}
          />
        )}
        {userInfo[0].stats.item1 ? (
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${
              userInfo[0].stats.item1
            }.png`}
            className={styles.item}
          />
        ) : (
          <img
            src={require(`images/pattern_opacity.png`)}
            className={styles.item}
          />
        )}
        {userInfo[0].stats.item2 ? (
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${
              userInfo[0].stats.item2
            }.png`}
            className={styles.item}
          />
        ) : (
          <img
            src={require(`images/pattern_opacity.png`)}
            className={styles.item}
          />
        )}
        {userInfo[0].stats.item3 ? (
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${
              userInfo[0].stats.item3
            }.png`}
            className={styles.item}
          />
        ) : (
          <img
            src={require(`images/pattern_opacity.png`)}
            className={styles.item}
          />
        )}
        {userInfo[0].stats.item4 ? (
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${
              userInfo[0].stats.item4
            }.png`}
            className={styles.item}
          />
        ) : (
          <div className={styles.noneItem}> </div>
        )}
        {userInfo[0].stats.item5 ? (
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${
              userInfo[0].stats.item5
            }.png`}
            className={styles.item}
          />
        ) : (
          <img
            src={require(`images/pattern_opacity.png`)}
            className={styles.item}
          />
        )}
        {userInfo[0].stats.item6 ? (
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${
              userInfo[0].stats.item6
            }.png`}
            className={styles.item}
          />
        ) : (
          <img
            src={require(`images/pattern_opacity.png`)}
            className={styles.item}
          />
        )}
      </div>
      <div className={styles.teamBox}>
        <div className={styles.team1}>{/* <div>{teamInfo[0].</div> */}</div>
      </div>
    </div>
  );
};

export default ChampionInfo;
