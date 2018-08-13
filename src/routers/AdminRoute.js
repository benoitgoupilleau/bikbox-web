import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/ui/Header';
import ErrorBoundary from '../components/ErrorBoundary'

export const PrivateRoute = ({
  isAuthenticated,
  isAdmin,
  toggleNavBar,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) => (
      (isAuthenticated && isAdmin) ? (
        <ErrorBoundary>
          <Header {...props} />
          <Component {...props} />
        </ErrorBoundary>
        ) : <Redirect to="/" />
    )}
  />
);

const maptStateToProps = (state) => ({
  isAuthenticated: !!state.user.authToken,
  isAdmin: state.user.user.userType === 'admin'
});

export default connect(maptStateToProps)(PrivateRoute);
