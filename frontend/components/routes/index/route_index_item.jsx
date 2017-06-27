import React from 'react';
import { Link } from 'react-router-dom';
import * as MapUtil from '../../../util/map_util.js';

export const DetailIndexItem = ({ route }) => {
  const date = new Date(route.created_at);
  return(
    <li className='recent-index-item'>
      <Link to={`/routes/view/${route.id}`}>
        <img
          src={ MapUtil.imgUrl(route.polylines, 90, 90)}
          alt={route.title} />
      </Link>
      <section className='route-index-summary'>
        <Link to={`/routes/view/${route.id}`}>
          { route.title }
        </Link>
        <h4>Distance</h4>
        <p>{ MapUtil.formatDistance(route.distance) }</p>mi

      </section>
      <section className='route-index-duration'>
        <h4>Duration</h4>
        <p>{ MapUtil.formatTime(route.completion_time) }</p>
        <h4>Calories Burned</h4>
        <p>~{ (MapUtil.formatDistance(route.distance) * 113).toFixed(0) }</p>
      </section>
      <section className='route-index-date'>
        <h4>Completed</h4>
        { (date.getMonth() + 1) +
          '/' + date.getDate() +
          '/' +  date.getFullYear() }
      </section>
    </li>
  );
};

export const ThumbnailIndexItem = ({ route }) => {
  const date = new Date(route.created_at);
  return(
    <li className='pending-index-item'>
      <Link className='pending-index-link' to={`/routes/view/${route.id}`}>
        <img
          src={ MapUtil.imgUrl(route.polylines, 142, 142)}
          alt={route.title} />
        <section className='route-pending-details'>
          <h4>{route.title}</h4>
          <p>{ MapUtil.formatDistance(route.distance) }</p> mi
        </section>
      </Link>
    </li>
  );
};
