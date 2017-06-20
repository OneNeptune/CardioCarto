import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js';

const _defaultState =
  Object.freeze({
    currentUser: null,
  });

const sessionReducer = (state = _defaultState, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _defaultState, { currentUser });
    default:
      return state;
  }
};

export default sessionReducer;
