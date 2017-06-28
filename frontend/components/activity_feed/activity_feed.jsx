import React from 'react';
import UserInfo from '../user/user_sidebar';
import { ActivityFeedItem } from './activity_feed_item';

class ActivityFeed extends React.Component {
  constructor(props) {
    super(props);
    this.generateFeed = this.generateFeed.bind(this);
  }

  componentDidMount() {
    this.props.fetchFeed();
  }

  generateFeed() {
    const { feed } = this.props.activity;
    return feed.map((feedItem) => {
      return (
        <ActivityFeedItem
          key={'FeedItem' + feedItem.route_id}
          feedItem={ feedItem } />
      );
    });
  }

  render() {
    const { currentUser, location, activity } = this.props;

    if (!activity.feed) return null;

    return(
      <section className='route-content-wrapper'>
        <section className='route-show-wrapper'>
          <section className='dashboard-section'>
            <section className='route-show-details-header'>
              <h3 className='route-details-label'>ACTIVITY FEED</h3>
            </section>
            <ul>
              { this.generateFeed() }
            </ul>
          </section>
        </section>
        <section className='route-show-sidebar'>
          <UserInfo currentUser={currentUser} location={ location } />
        </section>
      </section>
    );
  }
}

export default ActivityFeed;
