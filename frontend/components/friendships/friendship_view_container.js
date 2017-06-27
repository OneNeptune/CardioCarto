import { connect } from 'react-redux';
import {
  fetchAllFriendships,
  updateFriendship,
  destroyFriendship } from '../../actions/friendship_actions';

import FriendshipView from './friendship_view';

const mapStateToProps = (state) => {
  const {
    pending_friends, pending_requests, pending_response
  } = state.friends.pending;

  const { active_friends, active_requests } = state.friends.active;

  return({
    currentUser: state.session.currentUser,
    active: active_friends || {},
    pending: pending_friends || {},
    activeRequests: active_requests || {},
    pendingReceived: pending_requests || {},
    pendingSent: pending_response || {},
    loaded: state.friends.loaded
  });
};

const mapDispatchToProps = dispatch => ({
  fetchAllFriendships: () => dispatch(fetchAllFriendships()),
  updateFriendship: (friendship) => dispatch(updateFriendship(friendship)),
  destroyFriendship: (id) => dispatch(destroyFriendship(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendshipView);
