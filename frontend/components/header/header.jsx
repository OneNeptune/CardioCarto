import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  sessionLinks() {
    const { currentUser } = this.props;

    if (currentUser) {
      return (
        <nav className='session-links'>
          <i className='fa fa-user-circle-o'
            aria-hidden='true'></i>
          <section className='drop-down-menu'>
            <ul className='drop-down'>
              <li>
                <Link to='/routes/create'>
                  Create Route
                </Link>
              </li>
              <li>Friends</li>
              <li>Settings</li>
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
      // Login / Signup if not already on these pages

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
      </header>
    );
  }
}

export default Header;
