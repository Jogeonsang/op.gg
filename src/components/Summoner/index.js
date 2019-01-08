import React, { Component } from "react";
import { connect } from "react-redux";

// src module
import { getLeague } from "redux/Summoner/league/action";
import { getGameList } from "redux/Summoner/gameList/action";
import { getChampions } from "redux/static/action";
import styles from "./styles.module.scss";

// relative path import
import SummonerInfo from "./components/summoner";
import League from "./components/league/league";
import GameList from "./components/gameList";

class Summoner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: ""
    };
  }

  componentDidMount() {
    const { id, accountId } = this.props.summonerInfo;
    this.props.getLeague(id);
    this.props.getGameList(accountId);
    this.props.getChampions();
  }
  renderSummoner() {
    const { summonerInfo } = this.props;
    if (!this.props.summonerInfo.isLoading) {
      return <SummonerInfo summonerInfo={summonerInfo} />;
    }
  }
  renderLeague() {
    const { leagueInfo } = this.props.leagueInfo;
    if (!this.props.leagueInfo.isLoading) {
      return <League leagueInfo={leagueInfo} />;
    }
  }
  renderGameList() {
    if (!this.props.gameList.isLoading && !this.props.champions.isLoading) {
      return (
        <GameList
          matches={this.props.gameList.gameList.matches}
          summonerInfo={this.props.summonerInfo}
          champions={this.props.champions}
        />
      );
    }
  }
  render() {
    return (
      <div className={styles.warp}>
        <div className={styles.side_contents}>
          {this.renderSummoner()}
          {this.renderLeague()}
        </div>
        <div className={styles.main_contents}>{this.renderGameList()}</div>
      </div>
    );
  }
}
export default connect(
  ({ summoner, staticData }) => ({
    summonerInfo: summoner.search.summonerInfo,
    leagueInfo: summoner.league,
    gameList: summoner.game,
    champions: staticData.champions.data
  }),
  {
    getLeague,
    getGameList,
    getChampions
  }
)(Summoner);
