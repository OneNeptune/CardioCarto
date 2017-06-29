import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js';

const _defaultState =
  Object.freeze({
    currentUser: null
  });

const sessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const { currentUser } = action;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, _defaultState, { currentUser });
    default:
      return state;
  }
};

export default sessionReducer;
