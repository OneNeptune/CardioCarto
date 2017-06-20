import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import HeaderContainer from './header/header_container';
import FrontPage from './frontpage/frontpage';
import SignUpFormContainer from './session/sign_up_form_container';
import LogInFormContainer from './session/log_in_form_container';


const App = () => (
  <div className="main-wrapper">
    <HeaderContainer />
    <Switch>
      <AuthRoute path='/auth/signup' component={ SignUpFormContainer } />
      <AuthRoute path='/auth/login' component={ LogInFormContainer } />
      <Route exact path="/" component={ FrontPage } />
    </Switch>
  </div>
);

export default App;
