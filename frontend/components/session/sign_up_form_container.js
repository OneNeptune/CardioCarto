import { connect } from 'react-redux';
import { signUp, logIn } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';

// logIn is here for the guest login
const mapDispatchToProps = (dispatch) => ({
  signUp: (user) => dispatch(signUp(user)),
  logIn: (user) => dispatch(logIn(user))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUpForm);
