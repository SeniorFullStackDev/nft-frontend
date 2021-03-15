import { takeEvery, call, put } from 'redux-saga/effects';
import * as walletClient from 'api/wallet';
import * as actions from './wallet.action';

function* connectWallet(data: any) {
  const address: any = yield walletClient.connectWallet();
  yield put(actions.setAccount(address));
}

export default function* watchAuthSaga() {
  // yield takeEvery(actions.signInRequestSaga, signInRequest);
  yield takeEvery(actions.connectWalletSaga, connectWallet);
}
