import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signUp, logIn } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';

import SessionForm from './session_form';

const mapStateToProps = ({ errors }, ownProps) => ({
  errors,
  formType: ownProps.location.pathname.split('/').slice(-1)[0]
});

const mapDispatchToProps = (dispatch) => {
  return({
    signUp: (user) => dispatch(signUp(user)),
    logIn: (user) => dispatch(logIn(user)),
    logInGuest: () => dispatch(logIn({
      email: 'guest.user@cardiocarto.com', password: 'starship76'
    })),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
