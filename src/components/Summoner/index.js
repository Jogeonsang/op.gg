import React, { Component } from 'react';
import { connect } from 'react-redux';

// src module
import { getLeague } from 'redux/Summoner/action';
import { getGameList } from 'redux/Summoner/action';
import styles from './styles.module.scss';

// relative path import
import League from './components/league/league';

class Summoner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            summonerId: '',
            accountId: '',
        }
    }

    componentDidMount() {
        const { id, accountId } = this.props.summonerInfo
        this.props.getLeague(id)
        this.props.getGameList(accountId)
    }
    renderLeague() {
        console.log(this.props)
        const { leagueInfo } = this.props.leagueInfo;
        if(!this.props.leagueInfo.isLoading) {
            return (
                <League leagueInfo={leagueInfo} />
            )
        }
    }
    // renderGameList() {
    //     const { matches } = this.props.gameList
    //     if(!this.props.gameList.isLoading) {
    //         return (
    //             matches.map(gameList => console.log(gameList))
    //         );
    //     }
    // }
    render() {
        return (
            <div className={styles.warp}>
                <div className={styles.side_contents}>
                    {this.renderLeague()}
                </div>
                <div className={styles.main_contents}>
                    {/* {this.renderGameList()} */}
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
    }
    )(Summoner)