import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
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
    this.displayErrors = this.displayErrors.bind(this);
    this.nameInput = this.nameInput.bind(this);
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
    const { formType } = this.props;
    const user = this.state;
    if (formType === 'login') {
     this.props.logIn(user);
    } else {
     this.props.signUp(user);
    }
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
    const type = this.props.formType === 'login' ? 'logIn' : 'signUp';
    if (this.props.errors[type]) {
      const errors = this.props.errors[type];
      return(
        <ul className='session-errors'>
          {
            errors.map((errorMsg, idx) =>
              <li key={ `logInError${idx}` }>{ errorMsg }</li>)
          }
        </ul>
      );
    } else {
      this.props.clearErrors();
    }
  }

  nameInput() {
    if (this.props.formType === 'signup') {
      return(
        <span>
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
        </span>
      );
    }
  }

  render() {
    const { formType } = this.props;
    const link = (formType === 'login') ?
      ['signup', 'Sign Up'] : ['login', 'Log In'];
    const buttonText = (formType === 'login') ? 'Log In' : 'Sign Up';
    return (
      <section className="session-form-wrapper">
        <section className="demo-buttons">
          <Link to={`/auth/${link[0]}`}>{ link[1] }</Link>
          <button
            onClick={ this.logInGuest }
            className='guest'>
            Demo Log In
          </button>
          <section className={'or'}>
          <span className={'line'}></span>
          <p>OR</p>
          <span className={'line'}></span>
        </section>
        </section>
        <form onSubmit={this.handleSubmit} className="session-form">
          { this.displayErrors() }
          { this.nameInput() }
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
          <button className='submit' type="submit">{ buttonText }</button>
        </form>
      </section>
    );
  }
}

export default SessionForm;
