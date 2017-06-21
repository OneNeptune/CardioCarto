import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/" />
    )
  )}/>
);

const Protected = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
     loggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/auth/login"/>
    )
  )}/>
);

const Landing = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
     loggedIn ? (
      <Redirect to="/routes/create"/>
    ) : (
      <Component {...props}/>
    )
  )}/>
);

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
};

// connect Auth to the redux state
export const AuthRoute = withRouter(
  connect(mapStateToProps, null)(Auth));

// connect Protected to the redux state
export const ProtectedRoute = withRouter(
  connect(mapStateToProps, null)(Protected));

export const LandingRoute = withRouter(
  connect(mapStateToProps, null)(Landing));
