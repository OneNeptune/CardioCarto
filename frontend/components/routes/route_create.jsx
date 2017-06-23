import React from 'react';
import ReactDOM from 'react-dom';
import Map from './map';
import { withRouter } from 'react-router-dom';
import * as MapUtil from '../../util/map_util.js';


class RouteCreate extends React.Component {
  constructor(props) {
    super(props);
    this.createRoute = this.props.createRoute;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRoute = this.updateRoute.bind(this);

    this.state = {
      title: '',
      polylines: '',
      duration: 0,
      distance: 0,
      start_address: 'N/A',
      completed: false,
      finish_address: 'N/A',
      hh: '',
      mm: '',
      ss: '',
      completion_time: 0
    };
  }

  updateRoute(route) {
    this.setState(route);
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
    const completionTime = Math.floor(
      hoursToSecs + minutesToSecs + this.state.ss);

    this.setState({completion_time: completionTime }, () => {
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
                <li>
                  <h4>Distance:</h4>
                  <p>
                    { MapUtil.formatDistance(this.state.distance) }mi
                  </p>
                </li>
                <li>
                  <h4>Est Duration:</h4>
                  <p>
                    { MapUtil.formatTime(this.state.duration) }
                  </p>
                </li>
                <li>
                  <h4>Start:</h4>
                  <p className='address'>
                    { this.state.start_address }
                  </p>
                </li>
                <li>
                  <h4>Finish:</h4>
                  <p className='address'>
                    { this.state.finish_address }
                  </p>
                </li>
              </ul>
            </section>
            <section className='route-create-tools-details'>
              <h3>Save Route</h3>
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
                  className='create-route-button'>
                  Create Route
                </button>
              </form>
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
