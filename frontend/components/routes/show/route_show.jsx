import React from 'react';
import { Link } from 'react-router-dom';
import * as MapUtil from '../../../util/map_util.js';
import * as DescUtil from '../../../util/route_description_util';

class RouteShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      title: '',
      completed: 'false',
      hh: '',
      mm: '',
      ss: '',
      completion_time: 0
    }

    this.preFillForm = this.preFillForm.bind(this);
    this.createMap = this.createMap.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  preFillForm() {
    const { route } = this.props;

    if (!route) return null;

    if (!route.completion_time) {
      const ssMmHh = ''
    } else {
      const ssMmHh = MapUtil.formatTime(route.completion_time)
        .split(':').reverse();
    }
    this.setState({
      id: route.id,
      title: route.title,
      completed: route.completed,
      hh: ssMmHh[2] || '',
      mm: ssMmHh[1] || '',
      ss: ssMmHh[0] || '',
      completion_time: route.completion_time
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const hoursToSecs = this.state.hh * 3600;
    const minutesToSecs = this.state.mm * 60;
    const completionTime = hoursToSecs + minutesToSecs + parseInt(this.state.ss);
    this.setState({completion_time: completionTime }, () => {
      const route = this.state;
      this.props.updateRoute(route)
        .then(() => this.setState({ modal: false }));
    });

  }

  createMap() {
    const { route } = this.props;
    const mapOptions = MapUtil.mapOptions();
    this.map = new google.maps.Map(this.refs.map, mapOptions);

    const decodedPath = google.maps.geometry.encoding
      .decodePath(route.polylines);
    const polyline = new google.maps.Polyline({
      path: decodedPath,
      strokeColor: 'red',
      strokeOpacity: .6,
      strokeWeight: 5
    });

    const startMarker = new google.maps.Marker({
      position: decodedPath[0],
      map: this.map,
      icon: 'https://maps.gstatic.com/intl/en_ALL/mapfiles/dd-start.png'
    });

    const finishMarker = new google.maps.Marker({
      position: decodedPath[decodedPath.length - 1],
      map: this.map,
      icon: 'https://maps.gstatic.com/intl/en_ALL/mapfiles/dd-end.png'
    });

    const bounds = new google.maps.LatLngBounds();

    const polylineBounds = polyline.getPath();
    for (let i = 0; i < polylineBounds.length; i++) {
      bounds.extend(polylineBounds.getAt(i));
    }

    this.map.fitBounds(bounds);
    polyline.setMap(this.map);
  }

  componentDidMount() {
    const routeId = this.props.match.params.routeId;

    if (!this.props.route || this.props.route.id !== routeId) {
      this.props.fetchSingleRoute(routeId)
      .then(() => this.createMap())
      .then(() => this.preFillForm());
    }
  }

  componentWillReceiveProps(nextProps) {
    const currentRouteId = this.props.match.params.routeId;
    const nextRouteId = nextProps.match.params.routeId;
    if (currentRouteId !== nextRouteId) {
      this.props.fetchSingleRoute(nextRouteId)
        .then(() => this.createMap())
        .then(() => this.preFillForm());
    }
  }

  handleDelete(e) {
    e.preventDefault();
    const { route } = this.props;
    this.props.deleteRoute(route.id).then(() =>
        this.props.history.push('/my_home/user_dashboard')
      );
  }

  handleClick(e) {
    e.preventDefault();
    const targetClass = e.currentTarget.className
    if (targetClass !== 'modal' && targetClass !== 'edit-route') {
      e.stopPropagation();
      return null;
    }
    const { modal } = this.state;
    this.setState({ modal: !modal });
  }

  render() {
    const { route } = this.props;
    const { currentUser } = this.props;
    const { modal } = this.state;
    const routeId = this.props.match.params.routeId;

    if (!route || route.id !== parseInt(routeId)) return null;

    return(
      <section className='route-wrapper'>
        <section
          className={ modal ? 'modal' : 'hidden-modal' }
          onClick={ this.handleClick }>
          <section onClick={ this.handleClick } className='modal-content'>
            <section className='route-create-tools-details'>
              <h3>Edit Route</h3>
              <form onSubmit={this.handleSubmit} className='route-save-form'>
                <label htmlFor={'title'}>
                  <input
                    placeholder='Title'
                    onChange={this.update('title')}
                    value={this.state.title}
                    className='session-input' />
                </label>
                <label htmlFor={'completed'}>
                  <select
                    onChange={this.update('completed')}
                    value={ this.state.completed }>
                    <option value='false'>I plan to complete</option>
                    <option value='true'>I have completed</option>
                  </select>
                </label>
                <section className='timeSelect'>
                    <input
                      className='formTime'
                      disabled={ this.state.completed === 'false' }
                      onChange={this.update('hh')}
                      value={this.state.hh}
                      type='number'
                      min='0'
                      max='24'
                      placeholder='HH'
                      />
                    <input
                      className='formTime'
                      disabled={ this.state.completed === 'false' }
                      onChange={this.update('mm')}
                      value={this.state.mm}
                      type='number'
                      min='0'
                      max='60'
                      placeholder='MM'
                      />
                    <input
                      className='formTime'
                      disabled={ this.state.completed === 'false' }
                      onChange={this.update('ss')}
                      value={this.state.ss}
                      type='number'
                      min='0'
                      max='60'
                      placeholder='SS'
                      />
                </section>
                <button
                  type='submit'
                  onClick={ this.handleSubmit }
                  className='create-route-button'>
                  Edit Route
                </button>
              </form>
            </section>
          </section>
        </section>
        <section className='route-content-wrapper'>
          <section className='route-show-wrapper'>
            <section className='route-show-details-header'>
              <h3 className='route-details-label'>{ route.title }</h3>
            </section>
            <section className='route-show-details'>
              <section className='route-show-info'>
                <h4>Distance</h4>
                <p>
                  { MapUtil.formatDistance(route.distance) }
                </p>
                <sub>miles</sub>
              </section>
              <dl className='route-show-detailed'>
                <dt>Begins In:</dt>
                <dd>
                  { DescUtil.start(route) }
                </dd>
                <dt>Created By:</dt>
                <dd>
                  { route.user_name }
                </dd>
                <dt>Description:</dt>
                  { DescUtil.sentence(route) }
                <dt>Type:</dt>
                  <dd>Run</dd>
              </dl>
            </section>

            <section className='route-show-map' ref="map">
            </section>

          </section>

          <section className='route-show-sidebar'>
            <section className='route-sidebar-tools'>
              <ul>
                <li><Link to='/my_home/user_routes'>All Routes</Link></li>
                <li><Link to='/routes/create'>Create A Route</Link></li>
                <li>
                  <button
                    className='edit-route'
                    onClick={ this.handleClick }>
                    { route.completed ? 'Mark Incomplete' : 'Mark Completed' }
                  </button>
                </li>
                { currentUser ?
                  <li>
                    <button
                      onClick={ this.handleDelete }>
                        Delete Route
                    </button>
                  </li> : null}
              </ul>
            </section>
            <section className='route-sidebar-comments'>
              <form className='route-sidebar-comment-form'>

              </form>
              <ul className='sidebar-comments'>

              </ul>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default RouteShow;
