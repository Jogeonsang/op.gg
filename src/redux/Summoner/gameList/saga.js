import { takeEvery, put, call } from 'redux-saga/effects';

import { getGameList, getDetailGameList } from 'lib/api/summoner';

import {
  GET_GAMELIST,
  getGameListRequest,
  getGameListSuccess,
  getGameListFailuer,
  GET_DETAIL_GAMELIST,
  getDetailGameListRequest,
  getDetailGameListSuccess,
  getDetailGameListFailuer,
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

export function* getSummonerDetailGameList(actions) {
    const { gameId } = actions;
    yield put(getDetailGameListRequest());
    try {
        const detailGameList = yield call(getDetailGameList, gameId);
        yield put(getDetailGameListSuccess(detailGameList));
    } catch (error) {
        yield put(getDetailGameListFailuer(error));
    }
}
export function* watchgetDetailGameList() {
    yield takeEvery(GET_DETAIL_GAMELIST, getSummonerDetailGameList);
}