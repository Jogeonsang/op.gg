import React from "react";
import { connect } from "react-redux";
import styles from "./styles.module.scss";
import { getDetailGameList } from "redux/Summoner/gameList/action";
import ChampionInfo from "./championInfo";
import GameInfo from "./gameInfo";
const win = {
  backgroundColor: "#A2CFEC"
};
const lose = {
  backgroundColor: "#E2B5B3"
};
class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameList: [],
      teamId: null
    };
  }

  componentDidMount() {
    const { matches } = this.props;
    if (matches) {
      matches.map(game => {
        const { gameId } = game;
        this.props.getDetailGameList(gameId);
      });
    }
  }

  renderDiv() {
    if (this.props.gameList.gameInfo.length === 10) {
      return this.props.gameList.gameInfo.map(gameList => {
        const { participantIdentities, participants } = gameList;
        const participant = participantIdentities.filter(userList => {
          if (userList.player.summonerName === this.props.summonerInfo.name) {
            return userList.participantId;
          }
        });
        const userInfo = participants.filter(userList => {
          if (participant[0].participantId === userList.participantId) {
            return userList;
          }
        });
        const winloseStyle = userInfo[0].stats.win ? win : lose;
        return (
          <div className={styles.gameList}>
            <div className={styles.winlose} style={winloseStyle}>
              <div className={styles.content}>
                <GameInfo
                  queueId={gameList.queueId}
                  gameCreation={gameList.gameCreation}
                  gameDuration={gameList.gameDuration}
                  winlose={userInfo[0].stats.win}
                />
                <ChampionInfo
                  userInfo={userInfo}
                  champions={this.props.champions}
                />
              </div>
            </div>
          </div>
        );
      });
    } else {
      return <div className={styles.loading}>로딩중입니다</div>;
    }
  }

  render() {
    return <div>{this.renderDiv()}</div>;
  }
}
export default connect(
  ({ summoner }) => ({
    gameList: summoner.game
  }),
  {
    getDetailGameList
  }
)(GameList);
