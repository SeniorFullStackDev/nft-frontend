import { takeEvery, call, put } from 'redux-saga/effects';
import * as walletClient from 'api/wallet';
import { signInRequest, getNFTList } from 'api/api';
import localStore from 'helpers/localstore';

import * as actions from './wallet.action';

function* connectWallet(data: any) {
  const account: any = yield walletClient.connectWallet();
  yield put(actions.setAccount(account));

  const signRes = yield call(signInRequest, { account });
  localStore.setToken(signRes.body.token);

  const nftRes = yield call(getNFTList);
  yield put(actions.setNFTList(nftRes.body.list));
  console.log('nftRes --->', nftRes.body.list);
}

export default function* watchAuthSaga() {
  // yield takeEvery(actions.signInRequestSaga, signInRequest);
  yield takeEvery(actions.connectWalletSaga, connectWallet);
}
