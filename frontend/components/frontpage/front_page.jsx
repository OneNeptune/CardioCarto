import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.logInGuest = this.logInGuest.bind(this);
  }

  logInGuest(e) {
    e.preventDefault();
    const guest = {
      email: 'guest.user@cardiocarto.com',
      password: 'starship76'
     };
    this.props.logIn(guest);
  }

  render() {
    return (
      <section className='front-page-wrapper'>
        <section className='hero-wrapper'>
          <section className='front-page-hero'>
            <section className='hero-content'>
              <section className='hero-content-area'>
                <h2 className='hero-title-text'>
                  Make Every Mile Count, join free today
                </h2>
                <h3 className='hero-sub-title-text'>
                  You pound the pavement, we provide the route. Plan
                  each stride and learn from every route with CardioCarto
                </h3>
                <section className='hero-session-links'>
                  <button onClick={ this.logInGuest }
                    className='hero-demo-button'>
                    Demo Log In
                  </button>
                  <p className="or">
                    or
                  </p>
                  <Link to='/auth/signup'
                    className='hero-sign-up-button'>
                    Sign Up with Email
                  </Link>
                </section>
              </section>

              <section className='hero-footer'>
                <section className='hero-log-in'>
                  <p>Already a member?</p>
                  <Link
                    to='/auth/login'
                    className='hero-log-in-button'>
                    Log In
                  </Link>
                </section>
              </section>
            </section>
          </section>
        </section>
        <section className='features-wrapper'>
          <section className='features-content'>
            <section className='features-object'>
              <i className="fa fa-map-marker fa-6x"></i>
              <h3>Map Your Route</h3>
              <p>
                Know where you're going, see where you've been.
                We have over 7 routes to chose from -
                or be bold and create your own.
              </p>
            </section>
            <section className='features-object'>
              <i className="fa fa-bolt fa-6x"></i>
              <h3>Track Your Activity</h3>
              <p>
                Keep track of your routes, run times, and distance run,
                also connect with friends to share your activity and
                see theirs.
              </p>
            </section>
            <section className='features-object'>
              <i className="fa fa-users fa-6x"></i>
              <h3>Share With Friends</h3>
              <p>
                Add a social twist to your exercise routine.
                Get extra encouragement and cheer on your buddies
                through comments.
              </p>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default withRouter(FrontPage);
