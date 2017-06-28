import * as UserUtil from '../util/user_util';

export const RECEIVE_FEED = 'RECEIVE_FEED';

export const receiveFeed = feed => ({
  type: RECEIVE_FEED,
  feed
});

export const fetchFeed = () => dispatch => (
  UserUtil.fetchFeed().then(feed => dispatch(receiveFeed(feed)))
);
