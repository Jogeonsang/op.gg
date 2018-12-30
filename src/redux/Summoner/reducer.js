import { combineReducers } from 'redux';
import league from './league/reducer';
import search from './search/reducer';
import game from './gameList/reducer';
export default combineReducers({
    league,
    search,
    game,
});
