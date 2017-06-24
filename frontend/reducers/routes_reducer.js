import { merge } from 'lodash';
import { RECEIVE_ROUTES, RECEIVE_ROUTE } from '../actions/route_actions.js';

const _defaultState =
  Object.freeze({
    entities: {
      completed: [],
      pending: [],
    },
    currentRoute: null
  });

const routesReducer = (state = _defaultState, action) => {
  switch(action.type) {
    case RECEIVE_ROUTES:
      const { routes } = action;
      const { completed, pending } = routes;
      return merge({}, state, { entities: { completed, pending } });
    case RECEIVE_ROUTE:
      const { route } = action;
      const addedRoute = {
          entities: { [route.id]: route }, currentRoute: route.id
        };
      return merge({}, state, addedRoute);
    default:
      return state;
  }
};

export default routesReducer;
