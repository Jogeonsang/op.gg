export const GET_CHAMPIONS = "GET_CHAMPIONS";
export const GET_CHAMPIONS_REQUEST = "GET_CHAMPIONS_REQUEST";
export const GET_CHAMPIONS_SUCCESS = "GET_CHAMPIONS_SUCCESS";
export const GET_CHAMPIONS_FAILURE = "GET_CHAMPIONS_FAILURE";

export const getChampions = () => {
  return {
    type: GET_CHAMPIONS
  };
};

export const getChampionsRequest = () => {
  return {
    type: GET_CHAMPIONS_REQUEST
  };
};

export const getChampionsSuccess = champions => {
  return {
    type: GET_CHAMPIONS_SUCCESS,
    champions
  };
};

export const getChampionsFailure = error => {
  return {
    type: GET_CHAMPIONS_FAILURE,
    error
  };
};
