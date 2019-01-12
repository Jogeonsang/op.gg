import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
// src modules
import { getSummoner } from "redux/Summoner/search/action";
import styles from "./styles.module.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: "",
      summonerName: ""
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.summonerInfo) {
      this.setState({ redirect: { to: "summoner" } });
    }
  }
  searchSummoner = e => {
    e.preventDefault();
    const { summonerName } = this.state;
    this.props.getSummoner(summonerName);
  };
  handleInputChange = e => {
    this.setState({ summonerName: e.target.value });
  };
  render() {
    const { redirect } = this.state;
    if (redirect) return <Redirect {...redirect} />;

    return (
      <div className={styles.container}>
        <img
          src={require("images/Home_img.png")}
          className={styles.logo}
          alt="logo"
        />
        <form className={styles.summoner_form} onSubmit={this.searchSummoner}>
          <input
            className={styles.summoner_search}
            type="text"
            value={this.state.summonerName}
            onChange={this.handleInputChange}
          />
          <button className={styles.summoner_search_btn}>.GG </button>
        </form>
      </div>
    );
  }
}

export default connect(
  ({ summoner }) => ({ summonerInfo: summoner.search.summonerInfo }),
  { getSummoner }
)(Home);
