import React from 'react';
import { Link } from 'react-router';
import * as UserAPI from '../../util/user_util';

class Options extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageFile: null,
      imageUrl: null
    };

    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updateFile(e) {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  componentDidMount() {
    const { currentUser } = this.props;
    if (!currentUser) return null;
    this.setState({imageUrl: this.props.currentUser.image_url});
  }

  componentWillReceiveProps(nextProps) {
    const { currentUser } = this.props;
    if (!currentUser) return null;
    if (this.state.modal !== nextProps.modal) {
      this.setState({ modal: nextProps.modal });
    }
  }

  handleClick(e) {
    const targetClass = e.currentTarget.className;
    if (targetClass !== 'users-modal' && targetClass !== '') {
      e.stopPropagation();
      return null;
    }
    const { modal } = this.state;
    this.props.toggleModal();
  }

  handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append("user[image]", this.state.imageFile);

    this.props.updateUser(formData, this.props.currentUser.id)
      .then(() => this.props.toggleModal());
  }

  render() {
    const { modal } = this.props;
    const { currentUser } = this.props;
    if (!currentUser) return null;
    return(
      <section
        className={ modal ? 'users-modal' : 'hidden-modal' }
        onClick={ this.handleClick }>
        <section onClick={ this.handleClick } className='modal-content'>
          <section className='update-user-details'>
            <h3 className='add-avatar'>Add Avatar</h3>
            <section className='update-user-content'>
              <img src={this.state.imageUrl}/>
              <label className="add-file">
                Browse <input onChange={this.updateFile} type="file" hidden />
            </label>
            <button
              onClick={this.handleSubmit}
              className='upload'>Upload</button>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default Options;
