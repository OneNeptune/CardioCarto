import * as DashboardUtil from '../util/dashboard_util';
import { clearErrors, receiveErrors } from './errors_actions';

export const RECEIVE_DASHBOARD = 'RECEIVE_DASHBOARD';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveDashboard = dashboard => ({
  type: RECEIVE_DASHBOARD,
  dashboard
});

export const signUp = (user) => {
  return (dispatch) => {
    DashboardUtil.fetchDashboard()
      .then(
        (dashboard) => {
          dispatch(clearErrors());
          return dispatch(receiveDashboard(dashboard));
        },
        (errors) => {
          return dispatch(receiveErrors('dashboard', errors));
        }
      );
  };
};
