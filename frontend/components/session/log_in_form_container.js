import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logIn, clearErrors } from '../../actions/session_actions';
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
