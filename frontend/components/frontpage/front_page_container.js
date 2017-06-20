import { connect } from 'react-redux';
import { logIn } from '../../actions/session_actions';
import FrontPage from './front_page';

import { withRouter } from 'react-router';


const mapDispatchToProps = (dispatch) => ({
  logIn: (user) => dispatch(logIn(user))
});

export default connect(
  null,
  mapDispatchToProps
)(FrontPage);
