import { takeEvery, call, put } from 'redux-saga/effects';
import * as walletClient from 'api/wallet';
import * as API from 'api/api';
import localStore from 'helpers/localstore';

import * as actions from './wallet.action';

function* connectWallet(data: any) {
  const account: any = yield walletClient.connectWallet();
  yield put(actions.setAccount(account));

  const signRes = yield call(API.signInRequest, { account });
  localStore.setToken(signRes.body.token);
}

function* getCollections(data: any) {
  const colecRes = yield call(API.getCollections);
  yield put(actions.setCollections(colecRes.body.collections));
}

export default function* watchAuthSaga() {
  // yield takeEvery(actions.signInRequestSaga, signInRequest);
  yield takeEvery(actions.connectWalletSaga, connectWallet);
  yield takeEvery(actions.getCollectionsSaga, getCollections);
}
