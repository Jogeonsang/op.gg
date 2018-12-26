import { takeEvery, put, call } from 'redux-saga/effects';

import { getSummonerInfo } from 'lib/api/summoner';

import {
  GET_SUMMONER,
  getSummonerRequest,
  getSummonerSuccess,
  getSummonerFailure,
} from './action';

export function* getSummoner(actions) {
    const { summonerName } = actions
    yield put(getSummonerRequest());
    try {
    const summonerInfo = yield call(getSummonerInfo, summonerName);
    yield put(getSummonerSuccess(summonerInfo.data));
  } catch (error) {
    console.log('error:', error)
    yield put(getSummonerFailure(error));
  }
}

export default function* watchgetSummonerInfo() {
  yield takeEvery(GET_SUMMONER, getSummoner);
}
