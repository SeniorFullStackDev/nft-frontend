import { PATHS } from 'constants/routes';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useWallet from 'redux/wallet/wallet.hook';

const PrivateRoute = (rest) => {
  const { wallet } = useWallet();
  const isAuthenticated = localStorage.getItem('connected') || false;

  if (wallet.account) {
    return (<Route {...rest} />);
  }

  return (
    <Redirect
      push
      to={{
        pathname: PATHS.WALLET_CONNECT,
        state: { from: rest.location },
      }}
    />
  );
};

export default PrivateRoute;
