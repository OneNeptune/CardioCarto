import { connect } from 'react-redux';
import { logIn } from '../../actions/session_actions';
import FrontPage from './front_page';

import { withRouter } from 'react-router';


const mapDispatchToProps = (dispatch) => ({
  logInGuest: () => dispatch(logIn({
    email: 'guest.user@cardiocarto.com',password: 'starship76'
  }))
});

export default connect(
  null,
  mapDispatchToProps
)(FrontPage);
