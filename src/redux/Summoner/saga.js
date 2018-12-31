import { all } from 'redux-saga/effects';
import { watchgetLeagueInfo, } from './league/saga';
import { watchgetSummonerInfo } from'./search/saga';
import { watchgetGameList, watchgetDetailGameList } from './gameList/saga';
export default function* summonerRoot() {
  yield all([
    watchgetLeagueInfo(),
    watchgetSummonerInfo(),
    watchgetGameList(),
    watchgetDetailGameList(),
  ]);
}
