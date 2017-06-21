import * as RouteUtil from '../util/route_api_util';

export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveRoutes = routes => ({
  type: RECEIVE_ROUTES,
  routes
});

export const receiveSingleRoute = (route) => ({
  type: RECEIVE_ROUTE,
  route
});

export const receiveErrors = (form, errors) => ({
  type: RECEIVE_ERRORS,
  form,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const fetchAllRoutes = () => {
  return (dispatch) => {
    RouteUtil.fetchAllRoutes()
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
    RouteUtil.fetchSingleRoute(id)
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
    RouteUtil.createRoute(newRoute)
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
