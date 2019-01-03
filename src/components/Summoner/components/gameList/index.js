import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';
import { getDetailGameList } from 'redux/Summoner/gameList/action';
import championInfo from './championInfo';

class GameList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gameList: [],
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

                return (
                    <div>
                      <championInfo 
                        participants={participants}
                        participant={participant}
                      />
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