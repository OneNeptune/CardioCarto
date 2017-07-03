import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, LandingRoute } from '../util/route_util';

import HeaderContainer from './header/header_container';
import SubNav from './sub_nav/sub_nav';
import FrontPageContainer from './frontpage/front_page_container';
import SessionFormContainer from './session/session_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import RoutesIndexContainer from './routes/index/routes_index_container';
import ActivityFeedContainer from './activity_feed/activity_feed_container';
import RouteCreateContainer from './routes/create/route_create_container';
import RouteShowContainer from './routes/show/route_show_container';
import FriendshipSearchContainer from './friendships/friendship_search_container';
import FriendshipViewContainer from './friendships/friendship_view_container';
import NotFound from './not_found';

const App = () => (
  <div className='main-wrapper'>
    <HeaderContainer />
    <SubNav />
    <Switch>
      <LandingRoute exact path='/'
        component={ FrontPageContainer } />
      <AuthRoute path='/auth/signup'
        component={ SessionFormContainer } />
      <AuthRoute path='/auth/login'
        component={ SessionFormContainer } />
      <ProtectedRoute path='/my_home/user_dashboard'
        component={ DashboardContainer } />
      <ProtectedRoute path='/my_home/user_routes'
        component={ RoutesIndexContainer } />
      <ProtectedRoute path='/my_home/activity_feed'
        component={ ActivityFeedContainer} />
      <ProtectedRoute path='/routes/create'
        component={ RouteCreateContainer } />
      <ProtectedRoute path='/routes/view/:routeId'
        component={ RouteShowContainer } />
      <ProtectedRoute path='/friends/find'
        component={ FriendshipSearchContainer } />
      <ProtectedRoute path='/friends/view'
        component={ FriendshipViewContainer } />
    </Switch>
  </div>
);

export default App;
