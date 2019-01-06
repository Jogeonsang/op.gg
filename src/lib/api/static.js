import axios from "axios";

export const getChampions = () => {
  return axios.get(
    `http://ddragon.leagueoflegends.com/cdn/6.24.1/data/ko_KR/champion.json`
  );
};
