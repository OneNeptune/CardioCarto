import * as SessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (form, errors) => ({
  type: RECEIVE_ERRORS,
  form,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
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
