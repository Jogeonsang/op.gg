import { takeEvery, put, call } from 'redux-saga/effects';

import { getSummonerLeagueInfo } from 'lib/api/summoner';

import {
  GET_LEAGUE,
  getLeagueRequest,
  getLeagueSuccess,
  getLeagueFailure,
} from './action';

export function* getSummonerLeague(actions) {
    const { summonerId } = actions
    yield put(getLeagueRequest());
    try {
    const LeagueInfo = yield call(getSummonerLeagueInfo, summonerId);
    yield put(getLeagueSuccess(LeagueInfo));
  } catch (error) {
    console.log('error:', error)
    yield put(getLeagueFailure(error));
  }
}

export function* watchgetLeagueInfo() {
  yield takeEvery(GET_LEAGUE, getSummonerLeague);
}
