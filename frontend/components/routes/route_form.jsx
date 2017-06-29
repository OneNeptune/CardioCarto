import React from 'react';

class RouteForm extends React.Component {
  constructor(props) {
    super(props);

    this.createTimeInput = this.createTimeInput.bind(this);
  }

  createTimeInput(tt, max) {
    return(
      <input
        className='formTime'
        disabled={ this.props.route.completed === 'false' }
        onChange={this.props.update(tt)}
        value={this.props.route[tt]}
        type='number'
        min='0'
        max={`${max}`}
        placeholder={`${tt}`.toUpperCase()}
        />
    );
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
            { this.createTimeInput('hh', 24) }
            { this.createTimeInput('mm', 60) }
            { this.createTimeInput('ss', 60) }
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
