import { connect } from 'react-redux';
import { fetchDashboard } from '../../actions/dashboard_actions';

import Dashboard from './dashboard';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  dashboard: state.dashboard
});

const mapDispatchToProps = dispatch => ({
  fetchDashboard: () => dispatch(fetchDashboard())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
