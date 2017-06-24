import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signUp, logIn } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';

import SignUpForm from './sign_up_form';

const mapStateToProps = ({ errors }) => ({
  errors
});

// logIn is here for the guest login
const mapDispatchToProps = (dispatch) => ({
  signUp: (user) => dispatch(signUp(user)),
  logIn: (user) => dispatch(logIn(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm));
