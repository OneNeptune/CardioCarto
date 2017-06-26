import { connect } from 'react-redux';
import {
  fetchAllFriendships,
  createFriendship } from '../../actions/friendship_actions';

import FriendshipSearch from './friendship_search';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  potential_friends: state.friends.potential_friends,
});

const mapDispatchToProps = dispatch => ({
  fetchAllFriendships: () => dispatch(fetchAllFriendships()),
  createFriendship: (friendship) => dispatch(createFriendship(friendship)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendshipSearch);
