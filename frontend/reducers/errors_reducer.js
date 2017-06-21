import { merge } from 'lodash';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions.js';

const _defaultState =
  Object.freeze({
    errors: {
      signUp: [],
      logIn: [],
      createRoute: []
    }
  });

const errorsReducer = (state = _defaultState, action) => {
  switch(action.type) {
    case RECEIVE_ERRORS:
      const errors = action.errors.responseJSON;
      return merge({}, errors);
    case CLEAR_ERRORS:
      return _defaultState;
    default:
      return state;
  }
};

export default errorsReducer;
