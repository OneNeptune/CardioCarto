import React from 'react';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';

import * as MapUtil from '../../../util/map_util.js';
import * as DescUtil from '../../../util/route_description_util';

import { DetailIndexItem, ThumbnailIndexItem } from './route_index_item';
import UserInfo from '../../user/user_sidebar';

class RoutesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'list',
      group: 'all'
    };

    this.checkActive = this.checkActive.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllRoutes();
  }

  createIndexItems(type, routes) {
    const DetailItem = ({ component: Component, route }) => (
      <Component route={ route }/>
    );
    if (routes.length) {
      return routes.map((route) => (
          <DetailItem
            component={ type }
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

  showIndexItems() {
    const { view, group } = this.state;
    const { completed, pending } = this.props.routes;

    let routes = {};

    switch (group) {
      case 'completed':
        routes = completed;
        break;
      case 'pending':
        routes = pending;
        break;
      default:
        routes = completed.concat(pending);
    }

    const type = (view === 'list') ? DetailIndexItem : ThumbnailIndexItem;
    return this.createIndexItems(type, routes);
  }

  generateButton(key, value, faClass, text) {
    return(
      <button
        className={this.checkActive(key, value)}
        value={value}
        onClick={this.handleClick}>
        <i
          className={`fa ${faClass}`}
          aria-hidden='true'></i> { text }
      </button>
    );
  }

  handleClick(e) {
    e.preventDefault();
    const { value } = e.target;
    const type = (value === 'list' || value === 'thumb') ? 'view' : 'group';
    this.setState({[type]: value});
  }

  checkActive(key, value) {
    return( this.state[key] === value ? 'active' : '');
  }

  render() {
    const { currentUser, location } = this.props;
    const { completed, pending } = this.props.routes;

    if (!completed) return null;

    return(
      <section className='route-content-wrapper'>
        <section className='route-show-wrapper'>
          <section className='dashboard-section'>
            <section className='route-show-details-header'>
              <h3 className='route-details-label'>ALL USER ROUTES</h3>
            </section>
            <section className='button-row'>
              <section className='detail-buttons'>
                { this.generateButton('view', 'list', 'fa-th-list', 'Detail List') }
                { this.generateButton('view', 'thumb', 'fa-th', 'Thumbnail') }
              </section>

              <section className='detail-buttons'>
                { this.generateButton('group', 'all', 'fa-th', 'All') }
                { this.generateButton('group', 'completed', 'fa-th', 'Completed') }
                { this.generateButton('group', 'pending', 'fa-th', 'Pending') }
              </section>
            </section>
          </section>

          <section className='dashboard-section index-section'>
            <ul
              className={
                this.state.view === 'thumb' ? 'pending-index-items' : ''
              }>
              { this.showIndexItems() }
            </ul>
          </section>


        </section>
        <section className='route-show-sidebar'>
          <UserInfo currentUser={currentUser} location={location} />
        </section>
      </section>
    );
  }
}

export default RoutesIndex;
