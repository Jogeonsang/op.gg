import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';
import { getDetailGameList } from 'redux/Summoner/gameList/action';
import ChampionInfo from './championInfo';
import GameInfo from './gameInfo';
const win = {
    backgroundColor : '#A2CFEC'
}
const lose = {
    backgroundColor :  '#E2B5B3'
}
class GameList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gameList: [],
            teamId: null,
        }
    }

    componentDidMount() {
        const { matches } = this.props
        matches.map(game => {
            const { gameId } = game
            this.props.getDetailGameList(gameId)
        })
    }

    renderDiv() {
        if(this.props.gameList.gameInfo.length === 10) {
            return this.props.gameList.gameInfo.map(gameList => {
                const { participantIdentities, participants } = gameList
                const participant = participantIdentities.filter(userList => {
                    if(userList.player.summonerName === this.props.summonerInfo.name) {
                        return userList.participantId;
                    }
                });
                const userInfo = participants.filter(userList => {
                    if(participant[0].participantId === userList.participantId) {
                        return userList
                }
                });
                const winloseStyle = userInfo[0].stats.win ? win : lose;
                return (
                    <div className={styles.gameList}>
                        <div className={styles.winlose} style={winloseStyle}>
                      <GameInfo />
                      <ChampionInfo 
                        userinfo={userInfo}
                        participants={participants}
                        participant={participant}
                      />
                      </div>
                    </div>
                )
            });
        } else {
            return (
                <p>로딩중입니다</p>
            );
        };
    }

    render() {
        return (
          <div>
              {this.renderDiv()}
          </div>  
        );
    }
}
export default connect(
    ({ summoner}) => 
    ({
        gameList: summoner.game,
    }),
    {
        getDetailGameList,
    }
    )(GameList)