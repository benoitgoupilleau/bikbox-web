import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary'

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) => (
      isAuthenticated ? <Redirect to="/dashboard" /> : <ErrorBoundary><Component {...props} /></ErrorBoundary>
    )}
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.user.authToken
});

export default connect(mapStateToProps)(PublicRoute);
