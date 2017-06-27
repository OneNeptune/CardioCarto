import { extend } from 'lodash';
import { RECEIVE_FRIENDSHIPS } from '../actions/friendship_actions.js';

const _defaultState = () => (
  {
    loaded: false,
    potential_friends: [],
    active: {
      active_friends: {},
      pending_requests: {}
    },
    pending: {
      pending_friends: {},
      pending_requests: {},
      pending_response: {}
    }
  }
);

const friendsReducer = (state = _defaultState(), action) => {
  switch(action.type) {
    case RECEIVE_FRIENDSHIPS:
      action.friendships.loaded = true;
      return extend(_defaultState(), action.friendships);
    default:
      return state;
  }
};

export default friendsReducer;
