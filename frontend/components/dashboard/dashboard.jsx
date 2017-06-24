import React from 'react';
import * as MapUtil from '../../util/map_util.js';
import RecentIndexItem from './recent_index_item';
import PendingIndexItem from './pending_index_item';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.dashboard.loaded) {
      this.props.fetchDashboard();
    }
  }

  render() {
    const { dashboard } = this.props;
    if (!dashboard) return null;

    const recentIndexItems = dashboard.most_recent.map((route) => {
      return(
        <RecentIndexItem key={'RecentIndex' + route.id} route={ route } />
      );
    });

    const pendingIndexItems = dashboard.pending.map((route) => {
      return(
        <PendingIndexItem key={'RecentIndex' + route.id} route={ route } />
      );
    });

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
                    { MapUtil.formatDistance(dashboard.total_duration)}
                  </p>
                  miles
                </li>
                <li>
                  DURATION
                  <p>
                    { MapUtil.formatTime(dashboard.total_distance).slice(0,-3) }
                  </p>
                  hours
                </li>
                <li>
                  ROUTES
                  <p>{ dashboard.total_completed }</p>
                  completed
                </li>
                <li>
                  ROUTES
                  <p>{ dashboard.total_created }</p>
                  created
                </li>
              </ul>
            </section>
          </section>

          <section className='dashboard-section'>
            <section className='route-show-details-header'>
              <h3 className='route-details-label'>RECENT ROUTES</h3>
            </section>
            <ul>
              { recentIndexItems }
            </ul>
          </section>

          <section className='dashboard-section'>
            <section className='route-show-details-header'>
              <h3 className='route-details-label'>PENDING ROUTES</h3>
            </section>
            <ul className='pending-index-items'>
              { pendingIndexItems }
            </ul>
          </section>
        </section>
        <section className='route-show-sidebar'>

        </section>
      </section>
    );
  }
}

export default Dashboard;
