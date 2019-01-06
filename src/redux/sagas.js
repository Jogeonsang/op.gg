import { all, fork } from "redux-saga/effects";

import watchgetChampions from "./static/saga";
import summonerRoot from "./Summoner/saga";
export default function* setFeedRoot() {
  yield all([fork(summonerRoot), watchgetChampions()]);
}
