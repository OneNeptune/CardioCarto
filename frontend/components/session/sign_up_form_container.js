import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';

const mapDispatchToProps = (dispatch) => ({
  signUp: (user) => dispatch(signUp(user))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUpForm);
