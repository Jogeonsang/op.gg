import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import rootSaga from './sagas';
/*
  eslint
  no-underscore-dangle: "off"
*/

export default function createNewStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combineReducers({
      ...reducer,
    }),
    {},
    compose(
      applyMiddleware(sagaMiddleware),
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  );


  sagaMiddleware.run(rootSaga);

  return store;
}
