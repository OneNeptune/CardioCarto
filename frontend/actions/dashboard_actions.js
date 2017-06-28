import * as DashboardUtil from '../util/dashboard_util';
import { clearErrors, receiveErrors } from './error_actions';

export const RECEIVE_DASHBOARD = 'RECEIVE_DASHBOARD';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveDashboard = dashboard => ({
  type: RECEIVE_DASHBOARD,
  dashboard
});

export const fetchDashboard = user => dispatch => (
  DashboardUtil.fetchDashboard().then(
    (dashboard) => {
      dispatch(clearErrors());
      return dispatch(receiveDashboard(dashboard));
    },
    (errors) => {
      return dispatch(receiveErrors('dashboard', errors));
    }
  )
);
