import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SubNav extends React.Component {
  constructor(props) {
    super(props);
    this.lastTab = this.lastTab.bind(this);
    this.active = this.active.bind(this);
  }

  lastTab() {
    const { pathname } = this.props.location;
    if (pathname.includes('create')) {
      return(
        <li className={ this.active('routes') }>
          <Link to='/routes/create'>
            Create Route
          </Link>
        </li>
      );
    } else {
      return(
        <li className={ this.active('routes') }>
          <Link to='/my_home/user_routes'>
            All Routes
          </Link>
        </li>
      );
    }
  }

  active(tabName) {
    return(
      this.props.location.pathname.includes(tabName) ? 'active' : ''
    );
  }

  render() {
    const { pathname } = this.props.location;
    if (pathname === '/' || pathname.includes('auth')) return null;
    return(
      <nav className='sub-nav-wrapper'>
        <ul className='sub-nav-bar'>
          <li className={ this.active('activity') }>
            <Link to='/my_home/activity_feed'>
              Activity Feed
            </Link>
          </li>
          <li className={ this.active('dashboard') }>
            <Link to='/my_home/user_dashboard'>
              My Dashboard
            </Link>
          </li>
          { this.lastTab() }
        </ul>
      </nav>
    );
  }
}

export default withRouter(SubNav);
