import { RECEIVE_FEED } from '../actions/activity_actions.js';

const activityReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FEED:
      return action.feed ;
    default:
      return state;
  }
};

export default activityReducer;
