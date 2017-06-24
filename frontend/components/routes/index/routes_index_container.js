import { connect } from 'react-redux';
import { fetchAllRoutes } from '../../../actions/route_actions';

import RoutesIndex from './routes_index';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  dashboard: state.dashboard,
  routes: state.routes.entities,
});

const mapDispatchToProps = dispatch => ({
  fetchAllRoutes: () => dispatch(fetchAllRoutes()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoutesIndex);
