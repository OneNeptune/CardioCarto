import React from 'react';

class RouteForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <form onSubmit={this.props.handleSubmit} className='route-save-form'>
        <label htmlFor={'title'}>
          <input
            placeholder='Title'
            onChange={this.props.update('title')}
            value={this.props.route.title}
            className='session-input' />
        </label>
        <label htmlFor={'completed'}>
          <select
            onChange={this.props.update('completed')}
            value={ this.props.route.completed }>
            <option value='false'>I plan to complete</option>
            <option value='true'>I have completed</option>
          </select>
        </label>
        <section className='timeSelect'>
            <input
              className='formTime'
              disabled={ this.props.route.completed === 'false' }
              onChange={this.props.update('hh')}
              value={this.props.route.hh}
              type='number'
              min='0'
              max='24'
              placeholder='HH'
              />
            <input
              className='formTime'
              disabled={ this.props.route.completed === 'false' }
              onChange={this.props.update('mm')}
              value={this.props.route.mm}
              type='number'
              min='0'
              max='60'
              placeholder='MM'
              />
            <input
              className='formTime'
              disabled={ this.props.route.completed === 'false' }
              onChange={this.props.update('ss')}
              value={this.props.route.ss}
              type='number'
              min='0'
              max='60'
              placeholder='SS'
              />
        </section>
        <button
          type='submit'
          className='create-route-button'
          onClick={this.props.handleSubmit}>
          { this.props.buttonText }
        </button>
      </form>
    );
  }
}

export default RouteForm;
