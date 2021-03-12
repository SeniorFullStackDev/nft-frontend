import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as authAction from './wallet.action';

const useWallet = () => {
  const dispatch = useDispatch();

  const onSignin = useCallback(
    (paload) => {
      dispatch(authAction.signInRequestSaga(paload));
    },
    [dispatch],
  );

  const connectWallet = useCallback(
    (paload) => {
      dispatch(authAction.signInRequestSaga(paload));
    },
    [dispatch],
  );
  return { connectWallet, onSignin };
};

export default useWallet;
