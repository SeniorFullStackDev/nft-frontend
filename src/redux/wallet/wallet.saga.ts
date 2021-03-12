import { takeEvery, call } from 'redux-saga/effects';
import * as walletClient from 'api/wallet';
import * as actions from './wallet.action';

function* connectWallet(data: any) {
  // Get the Wallet object of the connected account
  const address: any = yield walletClient.connectWallet();
  console.log('address --->', address);
}

export default function* watchAuthSaga() {
  // yield takeEvery(actions.signInRequestSaga, signInRequest);
  yield takeEvery(actions.connectWalletSaga, connectWallet);
}
