import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import PublicRoute from './PublicRoute';

import LoginPage from '../components/LoginPage';
import DashboardPage from '../components/DashboardPage';
import AdminPage from '../components/AdminPage';
import AlertPage from '../components/AlertPage';
import NotFoundPage from '../components/NotFoundPage';
import ResetPasswordPage from '../components/ResetPasswordPage';

import theme from '../styles/theme';

injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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
        <AdminRoute path="/admin" component={AdminPage} />
        <AdminRoute path="/alerts" component={AlertPage} />
        <PublicRoute path="/resetpassword/:token" component={ResetPasswordPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
