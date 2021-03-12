import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import walletReducer from './wallet/wallet.reducer';
import watchAuthSaga from './wallet/wallet.saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  walletReducer,
});

const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f,
  ),
);

sagaMiddleware.run(watchAuthSaga);

export default store;
