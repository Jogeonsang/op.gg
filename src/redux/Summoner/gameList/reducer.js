import {
    GET_GAMELIST_REQUEST,
    GET_GAMELIST_SUCCESS,
    GET_GAMELIST_FAILURE,
} from './action'

// 초기상태

const game = (
    state = {
        isLoading: true,
        gameList: []
    },
    action
) => {
    switch(action.type) {
        case GET_GAMELIST_REQUEST:
            return {
                ...state,
            }
        case GET_GAMELIST_SUCCESS:
            return {
                isLoading: false,
                gameList: action.gameList.data,
                error: null,
            }
        case GET_GAMELIST_FAILURE:
            return {
                isLoading: false,
                error: action.error
            }
            default:
                return state;
    }
}

export default game