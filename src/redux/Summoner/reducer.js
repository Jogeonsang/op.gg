import { combineReducers } from 'redux';
import league from './league/reducer';
import search from './search/reducer';
export default combineReducers({
    league,
    search,
});
