import * as FriendUtil from '../util/friendship_api_util';
import { clearErrors, receiveErrors } from './error_actions';

export const RECEIVE_FRIENDSHIPS = 'RECEIVE_FRIENDSHIPS';

export const receiveFriendships = friendships => ({
  type: RECEIVE_FRIENDSHIPS,
  friendships
});

export const fetchAllFriendships = () => dispatch => (
  FriendUtil.fetchAllFriendships().then((friendships) => {
      dispatch(clearErrors());
      return dispatch(receiveFriendships(friendships));
    }, (errors) => (dispatch(receiveErrors('friendships', errors)))
  )
);

export const fetchSingleFriendship = id => dispatch => (
  FriendUtil.fetchSingleFriendship(id)
    .then(() => {
        dispatch(clearErrors());
        return dispatch(fetchAllFriendships());
      }, (errors) => dispatch(receiveErrors('friendships', errors))
    )
);

export const createFriendship = friendship => dispatch => (
  FriendUtil.createFriendship(friendship)
    .then((success) => {
        dispatch(clearErrors());
        return dispatch(fetchAllFriendships());
      },
      (errors) => dispatch(receiveErrors('friendships', errors))
    )
);

export const updateFriendship = friendship => dispatch => (
  FriendUtil.updateFriendship(friendship)
    .then((success) => {
        dispatch(clearErrors());
        return dispatch(fetchAllFriendships());
      },
      (errors) => dispatch(receiveErrors('friendships', errors))
    )
);

export const destroyFriendship = id => dispatch => (
  FriendUtil.destroyFriendship(id)
    .then((success) => {
        dispatch(clearErrors());
        return dispatch(fetchAllFriendships());
      },
      (errors) => dispatch(receiveErrors('friendships', errors))
    )
);
