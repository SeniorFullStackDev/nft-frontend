import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as walletAction from './wallet.action';

const useWallet = () => {
  const dispatch = useDispatch();

  const wallet = useSelector((state: any) => state.walletReducer);

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

  const getCollections = useCallback(
    () => {
      dispatch(walletAction.getCollectionsSaga());
    },
    [dispatch],
  );

  return { wallet, connectWallet, requestSign, getCollections };
};

export default useWallet;
