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
        <button onClick={ this.props.logOut }>Log Out</button>
      );
    } else if (this.props.location.pathname.includes('auth')) {
      return null;
    } else {
      // Login / Signup if not already on these pages
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
            <Link to='/'></Link>
          </section>

          { this.sessionLinks() }
        </nav>
      </header>
    );
  }
}

export default Header;
