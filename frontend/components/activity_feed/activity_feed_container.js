import { connect } from 'react-redux';
import { fetchFeed } from '../../actions/activity_actions';

import ActivityFeed from './activity_feed';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  location: state.dashboard.location,
  activity: state.activity
});

const mapDispatchToProps = dispatch => ({
  fetchFeed: () => dispatch(fetchFeed())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityFeed);
