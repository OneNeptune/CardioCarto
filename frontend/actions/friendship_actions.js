import * as FriendUtil from '../util/friendship_api_util';
import { clearErrors, receiveErrors } from './error_actions';

export const RECEIVE_FRIENDSHIPS = 'RECEIVE_FRIENDSHIPS';

export const receiveFriendships = friendships => ({
  type: RECEIVE_FRIENDSHIPS,
  friendships
});

export const fetchAllFriendships = () => {
  return (dispatch) => {
    return FriendUtil.fetchAllFriendships()
      .then(
        (friendships) => {
          dispatch(clearErrors());
          return dispatch(receiveFriendships(friendships));
        },
        (errors) => {
          return dispatch(receiveErrors('friendships', errors));
        }
      );
  };
};

export const fetchSingleFriendships = (id) => {
  return (dispatch) => {
    return FriendUtil.fetchSingleFriendships(id)
      .then(
        () => {
          dispatch(clearErrors());
          return dispatch(fetchAllFriendships());
        },
        (errors) => {
          return dispatch(receiveErrors('friendships', errors));
        }
      );
  };
};

export const createFriendship = (friendship) => {
  return (dispatch) => {
    return FriendUtil.createFriendship(friendship)
      .then(
        (success) => {
          dispatch(clearErrors());
          return dispatch(fetchAllFriendships());
        },
        (errors) => {
          return dispatch(receiveErrors('friendships', errors));
        }
      );
  };
};

export const updateFriendship = (friendship) => {
  return (dispatch) => {
    return FriendUtil.updateFriendship(friendship)
      .then(
        () => {
          dispatch(clearErrors());
          return dispatch(fetchAllFriendships());
        },
        (errors) => {
          return dispatch(receiveErrors('friendships', errors));
        }
      );
  };
};

export const destroyFriendship = (id) => {
  return (dispatch) => {
    return FriendUtil.destroyFriendship(id)
      .then(
        () => {
          dispatch(clearErrors());
          return dispatch(fetchAllFriendships());
        },
        (errors) => {
          return dispatch(receiveErrors('friendships', errors));
        }
      );
  };
};
