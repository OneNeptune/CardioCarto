import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import App from './app';
import NotFound from './not_found';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <Switch>
        <Route path='/' component={ App } />
        <Route path='/*' component={ NotFound }/>
      </Switch>
    </HashRouter>
  </Provider>
);

export default Root;
