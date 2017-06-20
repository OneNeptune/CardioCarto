import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import HeaderContainer from './header/header_container';
import FrontPageContainer from './frontpage/front_page_container';
import SignUpFormContainer from './session/sign_up_form_container';
import LogInFormContainer from './session/log_in_form_container';


const App = () => (
  <div className="main-wrapper">
    <HeaderContainer />
    <Switch>
      <Route exact path="/" component={ FrontPageContainer } />
      <AuthRoute path='/auth/signup' component={ SignUpFormContainer } />
      <AuthRoute path='/auth/login' component={ LogInFormContainer } />
    </Switch>
  </div>
);

export default App;
