import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import Header from './header';

import { withRouter } from 'react-router';


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));
