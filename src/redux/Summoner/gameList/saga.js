import { takeEvery, put, call } from 'redux-saga/effects';

import { getGameList } from 'lib/api/summoner';

import {
  GET_GAMELIST,
  getGameListRequest,
  getGameListSuccess,
  getGameListFailuer,
} from './action';

export function* getSummonerGameList(actions) {
    const { accountId } = actions
    yield put(getGameListRequest());
    try {
    const gameList = yield call(getGameList, accountId);
    yield put(getGameListSuccess(gameList));
  } catch (error) {
    yield put(getGameListFailuer(error));
  }
}

export function* watchgetGameList() {
  yield takeEvery(GET_GAMELIST, getSummonerGameList);
}
