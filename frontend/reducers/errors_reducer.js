import { merge } from 'lodash';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';

const _defaultState =
  Object.freeze({
    signUp: [],
    logIn: [],
    createRoute: []
  });

const errorsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      if (action.errors.status === 404) return _defaultState;
      return merge({}, { [action.form]: action.errors.responseJSON });
    case CLEAR_ERRORS:
      return _defaultState;
    default:
      return state;
  }
};

export default errorsReducer;
