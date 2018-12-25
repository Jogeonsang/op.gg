
export const GET_SUMMONER = 'GET_SUMMONER';
export const GET_SUMMONER_REQUEST = 'GET_SUMMONER_REQUEST';
export const GET_SUMMONER_SUCCESS = 'GET_SUMMONER_SUCCESS';
export const GET_SUMMONER_FAILURE = 'GET_SUMMONER_FAILURE';

export const getSummoner = (summonerName) => {
    return {
        type: GET_SUMMONER,
        summonerName
    };
}

export const getSummonerRequest = () => {
    return {
        type: GET_SUMMONER_REQUEST,
    };
}

export const getSummonerSuccess = (summonerInfo) => {
    return {
        type: GET_SUMMONER_SUCCESS,
        summonerInfo,
    };
}

export const getSummonerFailure = (error) => {
    return {
        type: GET_SUMMONER_FAILURE,
        error,
    };
}