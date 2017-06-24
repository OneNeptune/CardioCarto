import { connect } from 'react-redux';

import { fetchAllRoutes } from '../../actions/route_actions';

import Dashboard from './dashboard';

const mapStateToProps = ({ state }) => ({
  currentUser: state.session.currentUser,
  routes: state.routes,
});

const mapDispatchToProps = dispatch => ({
  fetchAllRoutes: id => dispatch(fetchAllRoutes(id)),
});
