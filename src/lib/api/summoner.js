import axios from 'axios';
import { api_key } from 'config/api_key';

export const getSummonerInfo = (summonerName) => {
    return axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${api_key}`)
}

export const getSummonerLeagueInfo = (summonerId) => {
    return axios.get(`https://kr.api.riotgames.com/lol/league/v4/positions/by-summoner/${summonerId}?api_key=${api_key}`)
}

export const getGameList = (accountId, endIndex) => {
    return axios.get(`https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?endIndex=10&api_key=${api_key}`)
}