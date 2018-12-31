import React, { Component } from 'react';
import { connect } from 'react-redux';

// src module
import { getLeague } from 'redux/Summoner/league/action';
import { getGameList, getDetailGameList } from 'redux/Summoner/gameList/action';
import styles from './styles.module.scss';

// relative path import
import League from './components/league/league';
import GameList from './components/gameList';
import { throws } from 'assert';

class Summoner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gameId: '',
        }
    }

    componentDidMount() {
        const { id, accountId } = this.props.summonerInfo
        this.props.getLeague(id)
        this.props.getGameList(accountId)
    }
    renderLeague() {
        const { leagueInfo } = this.props.leagueInfo;
        if(!this.props.leagueInfo.isLoading) {
            return (
                <League leagueInfo={leagueInfo} />
            )
        }
    }
    renderGameList() {
        const { matches } = this.props.gameList.gameList
        if(!this.props.gameList.isLoading) {
             matches.map(detail => {
                 const { gameId } = detail
                 console.log(gameId);
                })
        }
    }
    render() {
        return (
            <div className={styles.warp}>
                <div className={styles.side_contents}>
                    {this.renderLeague()}
                </div>
                <div className={styles.main_contents}>
                    {this.renderGameList()}
                </div>
            </div>
        )
    }
}
export default connect(
    ({ summoner}) => 
    ({
        summonerInfo: summoner.search.summonerInfo,
        leagueInfo: summoner.league,
        gameList: summoner.game,
    }),
    {
        getLeague,
        getGameList,
        getDetailGameList,
    }
    )(Summoner)