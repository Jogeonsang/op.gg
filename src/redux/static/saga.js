import { takeEvery, put, call } from "redux-saga/effects";
import { getChampions } from "lib/api/static";

import {
  GET_CHAMPIONS,
  getChampionsRequest,
  getChampionsSuccess,
  getChampionsFailure
} from "./action";

export function* getAllChampion() {
  yield put(getChampionsRequest());
  try {
    const championinfo = yield call(getChampions);
    yield put(getChampionsSuccess(championinfo));
  } catch (error) {
    yield put(getChampionsFailure(error));
  }
}

export default function* watchgetChampions() {
  yield takeEvery(GET_CHAMPIONS, getAllChampion);
}
