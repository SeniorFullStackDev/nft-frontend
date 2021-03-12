import { PATHS } from 'constants/routes';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (rest) => {
  const isAuthenticated = localStorage.getItem('connected') || false;

  if (isAuthenticated) {
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
