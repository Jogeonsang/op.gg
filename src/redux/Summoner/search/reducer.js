import {
  GET_SUMMONER_REQUEST,
  GET_SUMMONER_SUCCESS,
  GET_SUMMONER_FAILURE
} from "./action";

// 초기상태

const summonerInfo = (
  state = {
    isLoading: true,
    summonerInfo: []
  },
  action
) => {
  switch (action.type) {
    case GET_SUMMONER_REQUEST:
      return {
        ...state
      };
    case GET_SUMMONER_SUCCESS:
      return {
        isLoading: false,
        summonerInfo: action.summonerInfo,
        error: null
      };
    case GET_SUMMONER_FAILURE:
      return {
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default summonerInfo;
