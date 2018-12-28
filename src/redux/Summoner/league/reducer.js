import {
    GET_LEAGUE_REQUEST,
    GET_LEAGUE_SUCCESS,
    GET_LEAGUE_FAILURE,
} from './action'

// 초기상태

const league = (
    state = {
        isLoading: true,
        leagueInfo: []
    },
    action
) => {
    switch(action.type) {
        case GET_LEAGUE_REQUEST:
            return {
                ...state,
            }
        case GET_LEAGUE_SUCCESS:
            return {
                isLoading: false,
                leagueInfo: action.LeagueInfo.data,
                error: null,
            }
        case GET_LEAGUE_FAILURE:
            return {
                isLoading: false,
                error: action.error
            }
            default:
                return state;
    }
}

export default league