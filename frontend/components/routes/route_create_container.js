import { connect } from 'react-redux';
import { createRoute } from '../../actions/route_actions';
import RouteCreate from './route_create';

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  createRoute: (route) => dispatch(createRoute(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteCreate);
