import axios from 'axios';
import { api_key } from 'config/api_key';

export const getSummonerInfo = (summonerName) => {
    return axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${api_key}`)
}

