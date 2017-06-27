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

    this.recentIndexItems = this.recentIndexItems.bind(this);
    this.pendingIndexItems = this.pendingIndexItems.bind(this);
  }

  componentDidMount() {
    this.props.fetchDashboard();
  }

  recentIndexItems() {
    const { dashboard } = this.props;
    if (dashboard.most_recent.length) {
      return dashboard.most_recent.map((route) => {
        return(
          <DetailIndexItem key={'RecentIndex' + route.id} route={ route } />
        );
      });
    } else {
      return(
        <li className='recent-index-item'>
          <p className='empty-index'>No recent routes.</p>
        </li>
      );
    }
  }

  pendingIndexItems() {
    const { dashboard } = this.props;
    if (dashboard.pending.length) {
      return dashboard.pending.map((route) => {
        return(
          <ThumbnailIndexItem key={'PendingIndex' + route.id} route={ route } />
        );
      });
    } else {
      return(
         <p className='empty-index'>No pending routes.</p>
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
              { this.recentIndexItems() }
            </ul>
          </section>

          <section className='dashboard-section'>
            <section className='route-show-details-header'>
              <h3 className='route-details-label'>PENDING ROUTES</h3>
            </section>
            <ul className='pending-index-items'>
              { this.pendingIndexItems() }
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
