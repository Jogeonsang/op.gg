
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