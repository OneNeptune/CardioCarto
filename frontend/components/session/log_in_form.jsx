import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logInGuest = this.logInGuest.bind(this);
    this.displayErrors = this.displayErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.logIn(user);
  }

  logInGuest(e) {
    e.preventDefault();
    const guest = {
      email: 'guest.user@cardiocarto.com',
      password: 'starship76'
     };
    this.props.logIn(guest);
  }

  displayErrors() {
    if (this.props.errors.logIn) {
      const { logIn } = this.props.errors;

      return(
        <ul className='session-errors'>
          {
            logIn.map((errorMsg, idx) =>
              <li key={ `logInError${idx}` }>{ errorMsg }</li>)
          }
        </ul>
      );
    }
  }

  render() {
    return (
      <section className="session-form-wrapper">
        <form onSubmit={this.handleSubmit} className="session-form">
          <Link to='/auth/signup'>Sign Up</Link>
          <button
            onClick={ this.logInGuest }
            className='guest'
            type='guest'>
            Demo Log In
          </button>
          <section className={'or'}>
            <span className={'line'}></span>
              <p>OR</p>
            <span className={'line'}></span>
          </section>
          { this.displayErrors() }
          <label htmlFor={'email'}>
            <input
              placeholder='Email'
              value={this.state.email}
              onChange={this.update('email')}
              className='session-input' />
          </label>
          <label htmlFor={'password'}>
            <input
              type='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.update('password')}
              className='session-input' />
          </label>
          <button className='submit' type="submit">Log In</button>
        </form>
      </section>
    );
  }
}

export default withRouter(LogInForm);
