import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import OptionsContainer from '../user/options_container';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ modal: !this.state.modal });
  }

  sessionLinks() {
    const { currentUser } = this.props;

    if (currentUser) {
      return (
        <nav className='session-links'>
          <img className='header-avatar' src={currentUser.image_url} />
          <section className='drop-down-menu'>
            <ul className='drop-down'>
              <button
                className='bordered-item'
                onClick={ this.toggleModal }>
                Edit Avatar
              </button>
              <li>
                <Link to='/friends/view'>
                  Friends
                </Link>
              </li>
              <li>
                <Link to='/routes/create'>
                  Create Route
                </Link>
              </li>
                <button onClick={ this.props.logOut }>Log Out</button>
            </ul>
          </section>
        </nav>
      );
    } else if (this.props.location.pathname.includes('auth')) {
      return(
        <nav className='session-links'>

        </nav>
      );
    } else {
      return(
        <nav className='session-links'>
          <Link className='logged-out' to='/auth/login'>Log In</Link>
          <Link className='logged-out sign-up-link'
            to='/auth/signup'>Sign Up</Link>
        </nav>
      );
    }
  }

  render() {
    const { currentUser } = this.props;
    return(
      <header className='header-nav-wrapper'>
        <nav className='header-nav'>
          <section className='logo'>
            <Link to={ currentUser ? '/my_home/user_dashboard' : '/'}></Link>
          </section>

          { this.sessionLinks() }
        </nav>
        { (currentUser) ?
        <OptionsContainer
          toggleModal={ this.toggleModal }
          modal={ this.state.modal }/>
        :
        '' }
      </header>
    );
  }
}

export default Header;
