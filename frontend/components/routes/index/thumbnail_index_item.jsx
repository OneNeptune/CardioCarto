import React from 'react';
import { Link } from 'react-router-dom';
import * as MapUtil from '../../../util/map_util.js';

const PendingIndexItem = ({ route }) => {
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

export default PendingIndexItem;
