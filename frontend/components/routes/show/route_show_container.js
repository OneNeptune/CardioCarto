import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  fetchSingleRoute,
  updateRoute,
  deleteRoute } from '../../../actions/route_actions';

import RouteShow from './route_show';

const mapStateToProps = (state, { match }) => {
  const currentRoute = state.routes.currentRoute;
  return({
    currentUser: state.session.currentUser,
    errors: state.errors,
    route: state.routes.entities[currentRoute],
  });
};

const mapDispatchToProps = dispatch => ({
  fetchSingleRoute: id => dispatch(fetchSingleRoute(id)),
  updateRoute: updatedRoute => dispatch(updateRoute(updatedRoute)),
  deleteRoute: id => dispatch(deleteRoute(id)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteShow));
