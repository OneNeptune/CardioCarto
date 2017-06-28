import React from 'react';
import ReactDOM from 'react-dom';
import Map from './map';
import RouteForm from '../route_form';
import { withRouter } from 'react-router-dom';
import * as MapUtil from '../../../util/map_util.js';


class RouteCreate extends React.Component {
  constructor(props) {
    super(props);
    this.createRoute = this.props.createRoute;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRoute = this.updateRoute.bind(this);
    this.update = this.update.bind(this);

    this.state = {
      title: '',
      polylines: '',
      duration: 0,
      distance: 0,
      start_address: 'N/A',
      completed: 'false',
      finish_address: 'N/A',
      hh: '',
      mm: '',
      ss: '',
      completion_time: 0
    };
  }

  updateRoute(route) {
    this.setState({
      polylines: route.polylines,
      distance: route.distance,
      duration: route.duration,
      start_address: route.start_address,
      finish_address: route.finish_address
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

      this.props.createRoute(route)
      .then((response) =>
      this.props.history.push(`/routes/view/${response.route.id}`));
    });
  }


  handleErrors() {
    const { createRoute } = this.props.errors;

    if (!createRoute.length) return null;

    const errorItems = createRoute.map((error, idx) => {
      return(<li key={idx}>{error}</li>);
    });
    return(
      <ul className='errors'>
        { errorItems }
      </ul>
    );
  }

  render() {
    const map = <Map updateRoute={ this.updateRoute } />;
    this.map = map;
    return(
      <section className='route-wrapper'>
        <section className='route-content-wrapper'>
          <section className='route-create-tools'>
            <h2 className='route-create-tools-title'>Create Run</h2>
            <section className='route-create-tools-details'>
              <ul className='route-details'>
                {[
                  ['Distance:', `${MapUtil.formatDistance(this.state.distance)} mi`],
                  ['Est Duration:', MapUtil.formatTime(this.state.duration)],
                  ['Start:', this.state.start_address],
                  ['Finish:', this.state.finish_address],
                ].map((listItem) => (
                  <li key={listItem[0]}>
                    <h4>{listItem[0]}</h4>
                    <p
                      className={listItem[0].length < 8 ? 'address' : ''}>
                      {listItem[1]}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
            <section className='route-create-tools-details'>
              <h3>Save Route</h3>
              <RouteForm
                route={ this.state }
                update={ this.update }
                handleSubmit={ this.handleSubmit }
                buttonText='Create Route'
                />
            </section>
          </section>
          <section className='route-create-map'>
            { this.handleErrors() }
            { map }
          </section>
        </section>
      </section>
    );
  }
}

export default RouteCreate;
