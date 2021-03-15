import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { PATHS } from 'constants/routes';
import history from 'redux/history';

// layout
import ContentLayout from 'layouts/ContentLayout';
import EmptyLayout from 'layouts/EmptyLayout';

// pages
import ConnectWallet from 'pages/connectWallet';
import Profile from 'pages/profile';
import Collections from 'pages/collections';

// theme
import { CustomTheme } from 'theme';

import PrivateRoute from 'layouts/PrivateRoute';

function App() {
  const renderWithLayout = (Component, Layout) => <Layout>{Component}</Layout>;
  const RedirectRoute = (rest) => (
    <Redirect push to={{ pathname: PATHS.PROFILE, state: { from: rest.location } }} />
  );

  return (
    <div className="App">
      <Provider store={store}>
        <CustomTheme>
          <div className="App">
            <Router history={history}>
              <div>
                <Switch>
                  <RedirectRoute
                    path={PATHS.HOME}
                    exact
                    render={() => renderWithLayout(<></>, ContentLayout)}
                  />
                  <Route
                    path={PATHS.WALLET_CONNECT}
                    exact
                    render={() => renderWithLayout(<ConnectWallet />, ContentLayout)}
                  />
                  <PrivateRoute
                    path={PATHS.PROFILE}
                    exact
                    render={() => renderWithLayout(<Profile />, ContentLayout)}
                  />

                  <PrivateRoute
                    path={PATHS.COLLECTIONS}
                    exact
                    render={() => renderWithLayout(<Collections />, ContentLayout)}
                  />

                </Switch>
              </div>
            </Router>

          </div>
        </CustomTheme>
      </Provider>
    </div>
  );
}

export default App;
