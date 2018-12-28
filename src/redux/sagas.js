import { all, fork }  from 'redux-saga/effects';

import summonerRoot from './Summoner/saga';
export default function* setFeedRoot() {
    yield all([
        fork(summonerRoot),
    ]);
}