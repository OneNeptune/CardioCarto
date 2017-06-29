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
    const create = pathname.includes('create');

    return(
      <li className={ this.active('routes') }>
        <Link to={`${ create ? '/routes/create' : '/my_home/user_routes' }`}>
          { create ? 'Create Route' : 'All Routes' }
        </Link>
      </li>
    );
  }

  active(tabName) {
    return(
      this.props.location.pathname.includes(tabName) ? 'active' : ''
    );
  }

  render() {
    const { pathname } = this.props.location;
    if (pathname === '/' || pathname.includes('auth')) return null;
    const stub = pathname.includes('friends') ?
      'friends' : 'my_home';
    const links = pathname.includes('friends') ?
      ['find' , 'view'] : ['activity_feed' , 'user_dashboard'];
    const desc = pathname.includes('friends') ?
      ['Find Friends' , 'View Friends'] : ['Activity Feed' , 'My Dashboard'];
      return (
        <nav className='sub-nav-wrapper'>
          <ul className={`sub-nav-bar ${stub === 'friends' ? ' short' : ''}`}>
            { links.map((link, idx) => (
              <li key={idx} className={ this.active(link) }>
                <Link to={ `/${stub}/${link}` }>
                  { desc[idx] }
                </Link>
              </li>
              )
            )}
            { (stub === 'my_home') ? this.lastTab() : '' }
          </ul>
        </nav>
      );
    }
}

export default withRouter(SubNav);
