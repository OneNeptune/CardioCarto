import * as RouteUtil from '../util/route_api_util';
import { clearErrors, receiveErrors } from './error_actions';

export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';

export const receiveRoutes = routes => ({
  type: RECEIVE_ROUTES,
  routes
});

export const receiveSingleRoute = (route) => ({
  type: RECEIVE_ROUTE,
  route
});

export const fetchAllRoutes = () => {
  return (dispatch) => {
    return RouteUtil.fetchAllRoutes()
      .then(
        (routes) => {
          dispatch(clearErrors());
          return dispatch(receiveRoutes(routes));
        },
        (errors) => {
          return dispatch(receiveErrors('createRoute', errors));
        }
      );
  };
};

export const fetchSingleRoute = (id) => {
  return (dispatch) => {
    return RouteUtil.fetchSingleRoute(id)
      .then(
        (route) => {
          dispatch(clearErrors());
          return dispatch(receiveSingleRoute(route));
        },
        (errors) => {
          return dispatch(receiveErrors('createRoute', errors));
        }
      );
  };
};

export const createRoute = (newRoute) => {
  return (dispatch) => {
    return RouteUtil.createRoute(newRoute)
      .then(
        (route) => {
          dispatch(clearErrors());
          return dispatch(receiveSingleRoute(route));
        },
        (errors) => {
          return dispatch(receiveErrors('createRoute', errors));
        }
      );
  };
};

export const deleteRoute = (id) => {
  return (dispatch) => {
    return RouteUtil.deleteRoute(id)
      .then(
        () => {
          dispatch(clearErrors());
          return dispatch(fetchAllRoutes());
        },
        (errors) => {
          return dispatch(receiveErrors('createRoute', errors));
        }
      );
  };
};
