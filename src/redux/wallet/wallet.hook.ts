import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as walletAction from './wallet.action';

const useWallet = () => {
  const dispatch = useDispatch();

  const requestSign = useCallback(
    () => {
      dispatch(walletAction.signInRequestSaga());
    },
    [dispatch],
  );

  const connectWallet = useCallback(
    () => {
      dispatch(walletAction.connectWalletSaga());
    },
    [dispatch],
  );
  return { connectWallet, requestSign };
};

export default useWallet;
