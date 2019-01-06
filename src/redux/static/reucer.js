import {
  GET_CHAMPIONS_REQUEST,
  GET_CHAMPIONS_SUCCESS,
  GET_CHAMPIONS_FAILURE
} from "./action";

const staticData = (
  state = {
    isLoading: true,
    champions: ""
  },
  action
) => {
  switch (action.type) {
    case GET_CHAMPIONS_REQUEST:
      return {
        ...state
      };
    case GET_CHAMPIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        champions: action.champions,
        error: null
      };
    case GET_CHAMPIONS_FAILURE:
      return {
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default staticData;
