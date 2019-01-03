import {
    // 최근 전적 정보 ( 상세 정보를 불러오기 위한 action )
    GET_GAMELIST_REQUEST,
    GET_GAMELIST_SUCCESS,
    GET_GAMELIST_FAILURE,
    
    // 전적 상세 정보 ( user에게 보여줄 전적 정보 )
    GET_DETAIL_GAMELIST_REQUEST,
    GET_DETAIL_GAMELIST_SUCCESS,
    GET_DETAIL_GAMELIST_FAILURE,
} from './action'

// 초기상태

const game = (
    state = {
        isLoading: true,
        gameList: [],
        gameInfo: [],
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
                ...state,
                isLoading: false,
                gameList: action.gameList.data,
                error: null,
            }
        case GET_GAMELIST_FAILURE:
            return {
                isLoading: false,
                error: action.error
            }
        case GET_DETAIL_GAMELIST_REQUEST:
            return {
                ...state,
            }
        case GET_DETAIL_GAMELIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                gameInfo: [...state.gameInfo, action.detailGameList.data],
                error: null,
            }
        case GET_DETAIL_GAMELIST_FAILURE:
            return {
                isLoading: false,
                error: action.error
            }
            default:
                return state;
    }
}

export default game
