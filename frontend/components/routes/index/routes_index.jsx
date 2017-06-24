import React from 'react';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';

import * as MapUtil from '../../../util/map_util.js';
import * as DescUtil from '../../../util/route_description_util';

import DetailIndexItem from './detail_index_item';
import ThumbnailIndexItem from './thumbnail_index_item';

class RoutesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'list',
      group: 'all'
    };

    this.detailIndexItems = this.detailIndexItems.bind(this);
    this.thumbnailIndexItems = this.thumbnailIndexItems.bind(this);
    this.showIndexItems = this.showIndexItems.bind(this);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { completed, pending } = this.props.routes;
    if (!completed.length && !pending.length) {
      this.props.fetchAllRoutes();
    }
  }

  detailIndexItems(routes) {
    if (routes.length) {
      return routes.map((route) => {
        return(
          <DetailIndexItem key={'DetailIndex' + route.id} route={ route } />
        );
      });
    } else {
      return(
        <li className='recent-index-item'>
          <p className='empty-index'>No routes to show.</p>
        </li>
      );
    }
  }

  thumbnailIndexItems(routes) {
    if (routes.length) {
      return routes.map((route) => {
        return(
          <ThumbnailIndexItem key={'ThumbIndex' + route.id} route={ route } />
        );
      });
    } else {
      return(
         <p className='empty-index'>No routes to show.</p>
      );
    }
  }

  showIndexItems() {
    const { view, group } = this.state;
    const { completed, pending } = this.props.routes;

    let routes = {};

    switch (group) {
      case 'completed':
        routes = completed;
        break;
      case 'pending':
        routes = pending;
        break;
      default:
        routes = completed.concat(pending);
    }

    if (view === 'list') {
      return this.detailIndexItems(routes);
    } else {
      return this.thumbnailIndexItems(routes);
    }
  }

  handleClick(e) {
    e.preventDefault();
    const { value } = e.target;
    const type = (value === 'list' || value === 'thumb') ? 'view' : 'group';
    this.setState({[type]: value});
  }

  render() {
    const { currentUser, dashboard } = this.props;
    const { completed, pending } = this.props.routes;
    const { view, group } = this.state;

    if (!completed) return null;

    return(
      <section className='route-content-wrapper'>
        <section className='route-show-wrapper'>
          <section className='dashboard-section'>
            <section className='route-show-details-header'>
              <h3 className='route-details-label'>ALL USER ROUTES</h3>
            </section>
            <section className='button-row'>
              <section className='detail-buttons'>
                <button
                  className={ view === 'list' ? 'active' : ''}
                  value='list'
                  onClick={ this.handleClick }>
                  <i
                    className='fa fa-th-list'
                    aria-hidden='true'></i> Detail List
                </button>
                <button
                  className={ view === 'thumb' ? 'active' : ''}
                  value='thumb'
                  onClick={ this.handleClick }>
                  <i
                    className='fa fa-th'
                    aria-hidden='true'></i> Thumbnail
                </button>
              </section>

              <section className='detail-buttons'>
                <button
                  className={ group === 'all' ? 'active' : ''}
                  value='all'
                  onClick={ this.handleClick }>
                  All
                </button>
                <button
                  className={ group === 'completed' ? 'active' : ''}
                  value='completed'
                  onClick={ this.handleClick }>
                  Completed
                </button>
                <button
                  className={ group === 'pending' ? 'active' : ''}
                  value='pending'
                  onClick={ this.handleClick }>
                  Pending
                </button>
              </section>
            </section>
          </section>

          <section className='dashboard-section index-section'>
            <ul className={ view === 'thumb' ? 'pending-index-items' : '' }>
              { this.showIndexItems() }
            </ul>
          </section>


        </section>
        <section className='route-show-sidebar'>
          <section className='sidebar-user-panel'>
            <section className='sidebar-user-avatar'>

            </section>
            <section className='sidebar-user-info'>
              <h4> { currentUser.first_name } { currentUser.last_name }</h4>
              <h5> { DescUtil.cityName(dashboard.location) }</h5>
            </section>
            <ul>
              <li><Link to='/routes/create/'>Create Route</Link></li>
              <li><Link to=''>Find Friends</Link></li>
            </ul>
          </section>
        </section>
      </section>
    );
  }
}

export default RoutesIndex;
