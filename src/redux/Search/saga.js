// import { takeEvery, put, call } from 'redux-saga/effects';

// import { getFeed } from '../../api/feed';

// import {
//   SET_FEED,
//   setFeedRequest,
//   setFeedSuccess,
//   setFeedFailure
// } from './action';

// export function* setFeedFlow() {
//   yield put(setFeedRequest());
//   try {
//     const itemList = yield call(getFeed);
//     console.log('saga-call:', itemList)

//     yield put(setFeedSuccess(itemList));
//   } catch (error) {
//     yield put(setFeedFailure(error));
//   }
// }

// export default function* watchSetFeed() {
//   yield takeEvery(SET_FEED, setFeedFlow);
// }
