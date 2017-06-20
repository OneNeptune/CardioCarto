import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <section>
        frontpage
      </section>
    );
  }
}

export default withRouter(FrontPage);
