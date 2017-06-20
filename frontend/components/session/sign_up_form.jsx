import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signUp({user});
  }


  render() {
    return (
      <div className="session-form-wrapper">
        <Link to='/auth/login'>Log In</Link>
        OR
        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <label htmlFor={'first_name'}>
            <input
              value={this.state.first_name}
              onChange={this.update('first_name')}
              className='session-input' />
          </label>
          <label htmlFor={'last_name'}>
            <input
              value={this.state.last_name}
              onChange={this.update('last_name')}
              className='session-input' />
          </label>
          <label htmlFor={'email'}>
            <input
              value={this.state.email}
              onChange={this.update('email')}
              className='session-input' />
          </label>
          <label htmlFor={'password'}>
            <input
              value={this.state.password}
              onChange={this.update('password')}
              className='session-input' />
          </label>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
