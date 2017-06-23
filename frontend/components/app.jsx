import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, LandingRoute } from '../util/route_util';

import HeaderContainer from './header/header_container';
import FrontPageContainer from './frontpage/front_page_container';
import SignUpFormContainer from './session/sign_up_form_container';
import LogInFormContainer from './session/log_in_form_container';
import RouteCreateContainer from './routes/route_create_container';
import RouteShowContainer from './routes/route_show_container';
import SubNav from './sub_nav/sub_nav';

const App = () => (
  <div className="main-wrapper">
    <HeaderContainer />
    <SubNav />
    <Switch>
      <LandingRoute exact path="/"
        component={ FrontPageContainer } />
      <AuthRoute path='/auth/signup'
        component={ SignUpFormContainer } />
      <AuthRoute path='/auth/login'
        component={ LogInFormContainer } />
      <ProtectedRoute path='/routes/create'
        component={ RouteCreateContainer } />
      <ProtectedRoute path='/routes/view/:routeId'
        component={ RouteShowContainer } />
    </Switch>
  </div>
);

export default App;
