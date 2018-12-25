import { all }  from 'redux-saga/effects';

import watchgetSummonerInfo from './Search/saga';

export default function* setFeedRoot() {
    yield all([watchgetSummonerInfo()]);
}