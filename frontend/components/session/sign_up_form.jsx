import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logInGuest = this.logInGuest.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signUp(user);
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
    if (this.props.errors.signUp) {
      const { signUp } = this.props.errors;

      return(
        <ul className='session-errors'>
          {
            signUp.map((errorMsg, idx) =>
              <li key={ `signUpError${idx}` }>{ errorMsg }</li>)
          }
        </ul>
      );
    } else {
      this.props.clearErrors();
    }
  }

  render() {
    return (
      <section className="session-form-wrapper">
        <form onSubmit={this.handleSubmit} className="session-form">
          <Link to='/auth/login'>Log In</Link>
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
          <label htmlFor={'first_name'}>
            <input
              placeholder='First name'
              value={this.state.first_name}
              onChange={this.update('first_name')}
              className='session-input' />
          </label>
          <label htmlFor={'last_name'}>
            <input
              placeholder='Last name'
              value={this.state.last_name}
              onChange={this.update('last_name')}
              className='session-input' />
          </label>
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
          <button className='submit' type="submit">Sign Up</button>
        </form>
      </section>
    );
  }
}

export default SignUpForm;
