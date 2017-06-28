import React from 'react';
import { Link } from 'react-router-dom';

import * as MapUtil from '../../util/map_util.js';
import * as DescUtil from '../../util/route_description_util';

import {
  DetailIndexItem, ThumbnailIndexItem
} from '../routes/index/route_index_item';

import UserInfo from '../user/user_sidebar';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDashboard();
  }

  createIndexItems(type) {
    const routes = this.props.dashboard[type];
    const DetailItem = ({ component: Component, route }) => (
      <Component route={ route }/>
    );
    if (routes.length) {
      return routes.map((route) => (
          <DetailItem
            component={
              type === 'most_recent' ? DetailIndexItem : ThumbnailIndexItem
            }
            key={`${type}` + route.id}
            route={ route } />
        )
      );
    } else {
      return(
          <p className='empty-index'>No routes to show.</p>
      );
    }
  }

  render() {
    const { currentUser, dashboard } = this.props;

    if (!dashboard.loaded || dashboard.user_id !== currentUser.id )
      return null;
    return(
      <section className='route-content-wrapper'>
        <section className='route-show-wrapper'>
          <section className='dashboard-section'>
            <section className='route-show-details-header'>
              <h3 className='route-details-label'>MY LIFETIME STATS</h3>
            </section>
            <section className='user-lifetime-stats'>
              <ul>
                <li>
                  DISTANCE
                  <p>
                    { MapUtil.formatDistance(dashboard.total_distance)}
                  </p>
                  miles
                </li>
                <li>
                  DURATION
                  <p>
                    { (dashboard.total_duration / 3600).toFixed(2) }
                  </p>
                  hours
                </li>
                <li>
                  ROUTES
                  <p>{ dashboard.total_completed || 0 }</p>
                  completed
                </li>
                <li>
                  ROUTES
                  <p>{ dashboard.total_created || 0 }</p>
                  pending
                </li>
              </ul>
            </section>
          </section>

          <section className='dashboard-section'>
            <section className='route-show-details-header'>
              <h3 className='route-details-label'>RECENT ROUTES</h3>
            </section>
            <ul>
              { this.createIndexItems('most_recent') }
            </ul>
          </section>

          <section className='dashboard-section'>
            <section className='route-show-details-header'>
              <h3 className='route-details-label'>PENDING ROUTES</h3>
            </section>
            <ul className='pending-index-items'>
              { this.createIndexItems('pending') }
            </ul>
          </section>
        </section>
        <section className='route-show-sidebar'>
          <UserInfo currentUser={currentUser} location={ dashboard.location } />
        </section>
      </section>
    );
  }
}

export default Dashboard;
