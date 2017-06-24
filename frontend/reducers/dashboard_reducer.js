import { merge } from 'lodash';
import { RECEIVE_DASHBOARD } from '../actions/dashboard_actions.js';

const _defaultState =
  Object.freeze({
    most_recent: [],
    pending: [],
    total_duration: 0,
    total_distance: 0,
    location: '',
  });

const dashboardReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DASHBOARD:
      return action.dashboard;
    default:
      return state;
  }
};

export default errorsReducer;
