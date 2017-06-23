import React from 'react';
import { withRouter } from 'react-router-dom';

class SubNav extends React.Component {
  constructor(props) {
    super(props);
    this.lastTab = this.lastTab.bind(this);
  }

  lastTab() {
    const { pathname } = this.props.location;
    if (pathname.includes('create')) {
      return(
        <li>Create Route</li>
      );
    } else {
      return(
        <li>All Routes</li>
      );
    }
  }

  markActive() {

  }

  render() {
    return(
      <nav className='sub-nav-wrapper'>
        <ul className='sub-nav-bar'>
          <li className="active">Activity Feed</li>
          <li>My Dashboard</li>
          { this.lastTab() }
        </ul>
      </nav>
    );
  }
}

export default withRouter(SubNav);
