import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchSingleRoute } from '../../actions/route_actions';
import RouteShow from './route_show';

const mapStateToProps = (state, { match }) => {
  const currentRoute = state.routes.currentRoute;
  return({
    errors: state.errors,
    route: state.routes.entities[currentRoute]
  });
};

const mapDispatchToProps = dispatch => ({
  fetchSingleRoute: id => dispatch(fetchSingleRoute(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteShow));
