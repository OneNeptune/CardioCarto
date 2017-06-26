import { connect } from 'react-redux';

import Options from './options';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  modal: ownProps.modal,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Options);
