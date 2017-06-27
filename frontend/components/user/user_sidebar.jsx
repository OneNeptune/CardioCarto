import React from 'react';
import { Link } from 'react-router-dom';
import * as DescUtil from '../../util/route_description_util';

const UserInfo = ({ currentUser, location }) => (
  <section className='sidebar-user-panel'>
    <section className='sidebar-user-avatar'>
      <img src={ currentUser.image_url } />
    </section>
    <section className='sidebar-user-info'>
      <h4> { currentUser.first_name } { currentUser.last_name }</h4>
      <h5> { DescUtil.cityName(location) }</h5>
    </section>
    <ul>
      <li><Link to='/routes/create/'>Create Route</Link></li>
      <li><Link to='/friends/find'>Find Friends</Link></li>
    </ul>
  </section>
);

export default UserInfo;
