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
          { this.createInput('first_name', 'First name') }
          { this.createInput('last_name', 'Last name') }
        </span>
      );
    }
  }

  createInput(key, placeholder) {
    return(
      <label htmlFor={key}>
        <input
          type={ key === 'password' ? 'password' : 'text' }
          placeholder={placeholder}
          value={this.state[key]}
          onChange={this.update(`${key}`)}
          className='session-input' />
      </label>
    );
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
            onClick={ this.props.logInGuest }
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

          { this.createInput('email', 'Email') }
          { this.createInput('password', 'Password') }
          <button className='submit' type="submit">{ buttonText }</button>
        </form>
      </section>
    );
  }
}

export default SessionForm;
