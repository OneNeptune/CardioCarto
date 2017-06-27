import * as SessionUtil from '../util/session_api_util';
import * as UserAPI from '../util/user_util';
import { clearErrors, receiveErrors } from './error_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const signUp = (user) => {
  return (dispatch) => {
    SessionUtil.createUser(user)
      .then(
        (currentUser) => {
          dispatch(clearErrors());
          return dispatch(receiveCurrentUser(currentUser));
        },
        (errors) => {
          return dispatch(receiveErrors('signUp', errors));
        }
      );
  };
};

export const logIn = (user) => {
  return (dispatch) => {
    SessionUtil.logIn(user)
      .then(
        (currentUser) => {
          dispatch(clearErrors());
          return dispatch(receiveCurrentUser(currentUser));
        },
        (errors) => {
          return dispatch(receiveErrors('logIn', errors));
        }
      );
  };
};

export const logOut = () => {
  return (dispatch) => {
    SessionUtil.logOut()
      .then(
        (currentUser) => {
          dispatch(clearErrors());
          return dispatch(receiveCurrentUser(null));
        },
        (errors) => {
          return dispatch(receiveErrors('logOut', errors));
        }
      );
  };
};

export const updateUser = (formData, id) => {
  return (dispatch) => {
    return UserAPI.updateUser(formData, id)
    .then(
      (currentUser) => {
        dispatch(clearErrors());
        return dispatch(receiveCurrentUser(currentUser));
      },
      (errors) => {
        return dispatch(receiveErrors('logIn', errors));
      }
    );
  };
};
