import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';

import Root from './components/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store = configureStore();
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  }

  ReactDOM.render(<Root store={store} />, root);
});
