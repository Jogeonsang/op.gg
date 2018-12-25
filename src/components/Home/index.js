import React from 'react';
import { connect } from 'react-redux';

// src modules
import { getSummoner } from 'redux/Search/action';
import styles from './styles.module.scss';


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            summonerName: '',
        }
    }
    searchSummoner = (e) => {
        e.preventDefault();
        const { summonerName } = this.state
        this.props.getSummoner(summonerName)
        console.log(summonerName);
    }
    handleInputChange = (e) => {
        this.setState({summonerName: e.target.value});
    }
    render() {
        return(
            <div className={styles.container}>
          <img
            src={require("images/Home_img.png")}
            className={styles.logo}
             alt='logo'
          />
        <form className={styles.summoner_form} onSubmit={this.searchSummoner}>
            <input className={styles.summoner_search} type='text' value={this.state.summonerName} onChange={this.handleInputChange}/>
            <button className={styles.summoner_search_btn} type='submit'>.GG</button>
        </form>
        </div>
        );
    }
}

export default connect(
    ({SummonerInfo}) => ({SummonerInfo: SummonerInfo}),
    { getSummoner }
    )(Home)