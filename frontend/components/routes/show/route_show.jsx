import React from 'react';
import { Link } from 'react-router-dom';
import RouteForm from '../route_form';

import * as MapUtil from '../../../util/map_util.js';
import * as DescUtil from '../../../util/route_description_util';
import * as CommentUtil from '../../../util/comment_api_util';

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
      completion_time: 0,
      body: ''
    };

    this.preFillForm = this.preFillForm.bind(this);
    this.createMap = this.createMap.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  preFillForm() {
    const { route } = this.props;

    if (!route) return null;

    let ssMmHh = '';
    if (route.completion_time) {
      ssMmHh = MapUtil.formatTime(route.completion_time)
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
      [field]: e.currentTarget.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { hh, mm, ss } = this.state;
    this.setState({completion_time: MapUtil.completionTime(hh,mm,ss)}, () => {
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

  fetchSingleRoute(routeId) {
    return this.props.fetchSingleRoute(routeId)
    .then(() => this.createMap())
    .then(() => this.preFillForm());
  }

  componentDidMount() {
    const routeId = this.props.match.params.routeId;

    if (!this.props.route || this.props.route.id !== routeId) {
      return this.fetchSingleRoute(routeId);
    }
  }

  componentWillReceiveProps(nextProps) {
    const currentRouteId = this.props.match.params.routeId;
    const nextRouteId = nextProps.match.params.routeId;
    if (currentRouteId !== nextRouteId) {
      return this.fetchSingleRoute(nextRouteId);
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
    const targetClass = e.currentTarget.className;
    if (targetClass !== 'modal' && targetClass !== 'edit-route') {
      e.stopPropagation();
      return null;
    }
    const { modal } = this.state;
    this.setState({ modal: !modal });
  }

  addComment(e) {
    e.preventDefault();
    const comment = {
      body: this.state.body,
      route_id: this.props.route.id
    };

    CommentUtil.createComment(comment)
      .then(() => this.props.fetchSingleRoute(this.props.route.id))
      .then(this.setState({body: '' }));
  }

  deleteComment(e) {
    e.preventDefault();

    CommentUtil.deleteComment(e.currentTarget.value)
      .then(
        () => this.props.fetchSingleRoute(this.props.route.id)
      );
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
                <RouteForm route={ this.state } update={ this.update } handleSubmit={ this.handleSubmit } buttonText='Edit Route' />
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
                { currentUser.id === route.user_id ?
                  <li>
                    <button
                      className='edit-route'
                      onClick={ this.handleClick }>
                      { route.completed ? 'Mark Incomplete' : 'Mark Completed' }
                    </button>
                  </li> : null}
                { currentUser.id === route.user_id ?
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
                  <input value={this.state.body}
                    placeholder='Add Comment'
                    onChange={this.update('body')} />
                  <button onClick={ this.addComment }>
                    <i className="fa fa-commenting-o" aria-hidden="true"></i>
                  </button>
                </form>
                <ul className='sidebar-comments'>
                  { route.comments.map((comment) => (
                    <li key={'comment'+comment.id}>
                      <img
                        src={comment.image_url}
                        title={ comment.author_name }/>
                      <p>
                        { comment.body }
                      </p>
                      { (comment.author_id === currentUser.id) ?
                        <button
                          value={ comment.id }
                          onClick={ this.deleteComment }>
                          <i
                            className="fa fa-times-circle"
                            aria-hidden="true" />
                        </button> : ''
                      }
                    </li>
                  ))}
              </ul>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default RouteShow;
