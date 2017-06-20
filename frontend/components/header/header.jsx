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
      // user avatar with dropdown menu
    } else {
      // Login / Signup
      return(
        <nav className='session-links'>
          <Link to='/auth/login'>Log In</Link>
          <Link to='/auth/signup'>Sign Up</Link>
        </nav>
      );
    }
  }

  render() {
    return(
      <header className='header-nav-wrapper'>
        <nav className='header-nav'>
          <section className='logo'>
            CardioCarto
          </section>

          { this.sessionLinks() }
        </nav>
      </header>
    );
  }
}

export default Header;
