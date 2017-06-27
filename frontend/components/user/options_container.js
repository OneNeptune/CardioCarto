import { connect } from 'react-redux';
import { updateUser } from '../../actions/session_actions';

import Options from './options';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  modal: ownProps.modal,
});

const mapDispatchToProps = dispatch => ({
  updateUser: (formData, id) => dispatch(updateUser(formData, id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Options);
