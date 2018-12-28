
export const GET_LEAGUE = 'GET_LEAGUE';
export const GET_LEAGUE_REQUEST = 'GET_LEAGUE_REQUEST';
export const GET_LEAGUE_SUCCESS = 'GET_LEAGUE_SUCCESS';
export const GET_LEAGUE_FAILURE = 'GET_LEAGUE_FAILURE';

export const getLeague = (summonerId) => {
    return {
        type: GET_LEAGUE,
        summonerId
    };
}

export const getLeagueRequest = () => {
    return {
        type: GET_LEAGUE_REQUEST,
    };
}

export const getLeagueSuccess = (LeagueInfo) => {
    return {
        type: GET_LEAGUE_SUCCESS,
        LeagueInfo,
    };
}

export const getLeagueFailure = (error) => {
    return {
        type: GET_LEAGUE_FAILURE,
        error,
    };
}