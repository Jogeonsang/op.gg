import React, { Component } from 'react';
import { connect } from 'react-redux';

// src module
import { getLeague } from 'redux/Summoner/action';
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
        const { id } = this.props.summonerInfo
        this.props.getLeague(id)
    }
    renderLeague() {
        const { leagueInfo } = this.props.leagueInfo;
        if(!this.props.leagueInfo.isLoading) {
            return (
                <League leagueInfo={leagueInfo} />
            )
        }
    }
    render() {
        return (
            <div className={styles.warp}>
                <div className={styles.side_contents}>
                    {this.renderLeague()}
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
    }),
    {
        getLeague,
    }
    )(Summoner)