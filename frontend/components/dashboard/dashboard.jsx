import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentWillMount() {
    if (!this.props.dashboard) {
      this.props.fetchDashboard();
    }
  }

  render() {
    return(
      <h3>User Dashboard!</h3>
    );
  }
}

export default Dashboard;
