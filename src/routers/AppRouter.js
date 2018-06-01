import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LoadingPage from '../components/LoadingPage'

import theme from '../styles/theme';

injectGlobal`
  * {
    box-sizing: border-box;
  }
  html{
    font-size: ${theme.baseFontSize};
  }
  body {
    color: ${theme.colors.defaultColor};
    font-family: Helvetica, Arial, sans-serif;
    font-size: ${theme.fonts.medium};;
    line-height: 1.6;
    margin: 0;
  }
  button{
    cursor: pointer;
  }

  button:disabled{
    cursor: default;
  }

  .is-active{
    font-weight: bold;
  }
`;

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <Route path="/loading" component={LoadingPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
