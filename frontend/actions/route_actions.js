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

export const fetchAllRoutes = () => dispatch => (
  RouteUtil.fetchAllRoutes().then((routes) => {
      dispatch(clearErrors());
      return dispatch(receiveRoutes(routes));
    },
    (errors) => (
      dispatch(receiveErrors('createRoute', errors))
    )
  )
);

export const fetchSingleRoute = id => dispatch => (
  RouteUtil.fetchSingleRoute(id).then((route) => {
      dispatch(clearErrors());
      return dispatch(receiveSingleRoute(route));
    },
    (errors) => (
      dispatch(receiveErrors('createRoute', errors))
    )
  )
);

export const createRoute = newRoute => dispatch => (
  RouteUtil.createRoute(newRoute).then((route) => {
      dispatch(clearErrors());
      return dispatch(receiveSingleRoute(route));
    },
    (errors) => (
      dispatch(receiveErrors('createRoute', errors))
    )
  )
);

export const updateRoute = updatedRoute => dispatch => (
  RouteUtil.updateRoute(updatedRoute).then((route) => {
      dispatch(clearErrors());
      return dispatch(receiveSingleRoute(route));
    },
    (errors) => (
      dispatch(receiveErrors('updateRoute', errors))
    )
  )
);

export const deleteRoute = id => dispatch => (
  RouteUtil.deleteRoute(id).then(() => {
      dispatch(clearErrors());
      return dispatch(fetchAllRoutes());
    }
  )
);
