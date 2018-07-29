import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/ui/Header';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) => (
      isAuthenticated ? (
        <div>
          <Header {...props} />
          <Component {...props} />
        </div>
        ) : <Redirect to="/" />
    )}
  />
);

const maptStateToProps = (state) => ({
  isAuthenticated: !!state.user.authToken
});

export default connect(maptStateToProps)(PrivateRoute);
