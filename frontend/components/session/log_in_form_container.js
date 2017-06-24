import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logIn } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import LogInForm from './log_in_form';

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = (dispatch) => ({
  logIn: (user) => dispatch(logIn(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInForm));
