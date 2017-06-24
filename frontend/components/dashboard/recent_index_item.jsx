import React from 'react';
import { Link } from 'react-router-dom';
import * as MapUtil from '../../util/map_util.js';

const RecentIndexItem = ({ route }) => (
  <li key={ 'RecentIndex' + route.id } className='recent-index-item'>
    <Link to={`/routes/view/${route.id}`}>
      <img
        src={ MapUtil.imgUrl(route.polylines, 90, 90)}
        alt={route.title} />
    </Link>
  </li>
);

export default RecentIndexItem;
