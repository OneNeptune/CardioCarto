import React from 'react';
import { Link } from 'react-router-dom';
import * as RouteUtil from '../../util/map_util';

export const ActivityFeedItem = ({ feedItem }) => {
  const {
    avatar_image,
    person,
    completed,
    title,
    route_id,
    completion_time,
    distance,
    polylines,
    created_at
  } = feedItem;

  const mapPreview = (
    <li className={`activity-map`}>
      <Link to={`/routes/view/${route_id}`}>
        <img
          className={completed ? 'map-left' : 'map-right'}
          src={ RouteUtil.imgUrl(polylines, 260, 146) } />
      </Link>
    </li>
  );

  return(
    <li className={`feed-index-item`}>
      <img src={ avatar_image } />
      <section>
        <h3>
          <p>
            {person}&nbsp;{completed ? 'ran ' : 'created '}
            the&nbsp;route&nbsp;
            <Link to={`/routes/view/${route_id}`}>{ title }</Link>
          </p>
          <p className='time-since'>
            { RouteUtil.timeSince(created_at) } ago
          </p>
        </h3>
        <ul className={ completed ? 'map-left' : 'map-right' }>
          { completed ? mapPreview : '' }
          <li>
            <i className="fa fa-clock-o fa-4x" aria-hidden="true"></i>
            <p>
              {completed ? RouteUtil.formatTime(completion_time) : 'PENDING' }
            </p>
          </li>
          <li>
            <i className="fa fa-map-signs fa-4x" aria-hidden="true"></i>
            <p>{ RouteUtil.formatDistance(distance) } mi</p>
          </li>
          { completed ? '' : mapPreview }
        </ul>
      </section>
    </li>
  );
};
