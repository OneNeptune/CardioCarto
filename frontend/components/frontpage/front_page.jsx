import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
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
                  <button onClick={ this.props.logInGuest }
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
              {
                [
                  ['fa-map-marker', 'Map Your Route', 'Know where you\'re going, see where you\'ve been. We have over 7 routes to chose from or be bold and create your own.'],
                  ['fa-bolt', 'Track Your Activity', 'Keep track of your routes, run times, and distance run, also connect with friends to share your activity and see theirs.'],
                  ['fa-users', 'Share With Friends', 'Add a social twist to your exercise routine. Get extra encouragement and cheer on your buddies through comments.']
                ].map((item) => (
                  <section key={item[0]} className='features-object'>
                    <i className={`fa ${item[0]} fa-6x`} />
                    <h3>{ item[1] }</h3>
                    <p>{ item[2] }</p>
                  </section>
                ))
              }
          </section>
        </section>
      </section>
    );
  }
}

export default withRouter(FrontPage);
