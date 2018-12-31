// 최근 전적 정보 ( 상세 정보를 불러오기 위한 action )
export const GET_GAMELIST = 'GET_GAMELIST';
export const GET_GAMELIST_REQUEST = 'GET_GAMELIST_REQUEST';
export const GET_GAMELIST_SUCCESS = 'GET_GAMELIST_SUCCESS';
export const GET_GAMELIST_FAILURE = 'GET_GAMELIST_FAILURE';

export const getGameList = (accountId) => {
    return {
        type: GET_GAMELIST,
        accountId
    };
}

export const getGameListRequest = () => {
    return {
        type: GET_GAMELIST_REQUEST,
    };
}

export const getGameListSuccess = (gameList) => {
    return {
        type: GET_GAMELIST_SUCCESS,
        gameList,
    };
}

export const getGameListFailuer = (error) => {
    return {
        type: GET_GAMELIST_FAILURE,
        error,
    };
}

// 전적 상세 정보 ( user에게 보여줄 전적 정보 )
export const GET_DETAIL_GAMELIST = 'GET_DETAIL_GAMELIST';
export const GET_DETAIL_GAMELIST_REQUEST = 'GET_DETAIL_GAMELIST_REQUEST';
export const GET_DETAIL_GAMELIST_SUCCESS = 'GET_DETAIL_GAMELIST_SUCCESS';
export const GET_DETAIL_GAMELIST_FAILURE = 'GET_DETAIL_GAMELIST_FAILURE';

export const getDetailGameList = (gameId) => {
    return {
        type: GET_DETAIL_GAMELIST,
        gameId
    };
}

export const getDetailGameListRequest = () => {
    return {
        type: GET_DETAIL_GAMELIST_REQUEST,
    };
}

export const getDetailGameListSuccess = (detailGameList) => {
    return {
        type: GET_DETAIL_GAMELIST_SUCCESS,
        detailGameList,
    };
}

export const getDetailGameListFailuer = (error) => {
    return {
        type: GET_DETAIL_GAMELIST_FAILURE,
        error,
    };
}