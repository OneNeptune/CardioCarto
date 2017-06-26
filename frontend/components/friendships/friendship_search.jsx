import React from 'react';

import FriendCard from './friend_card';

class FriendshipSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchParams: '',
      displayedUsers: [],
    };

    this.update = this.update.bind(this);
    this.renderResults = this.renderResults.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllFriendships();
  }

  update(field) {
    const { potential_friends } = this.props;
    return e => this.setState({
      [field]: e.currentTarget.value,
      displayedUsers: potential_friends.filter(
        friend => friend.full_name.includes(e.currentTarget.value)
      )
    });
  }

  renderResults() {
    if (this.state.searchParams) {
      return this.state.displayedUsers.map((user) => {
        return (
          <FriendCard
            key={'Friend' + user.id}
            friend={ user }
            friendship={ user.id }
            actionHandler={ this.handleClick }
            type={ 3 }
             />
        );
      });
    }
  }

  handleClick(e) {
    e.preventDefault();
    const value = parseInt(e.currentTarget.value);
    const friendship = {
      receiver_id: value
    };
    const displayedUsers = this.state.displayedUsers.filter(
      friend => friend.id !== value);

    this.props.createFriendship(friendship)
      .then(() => this.props.fetchAllFriendships());

    this.setState({
        displayedUsers: displayedUsers
        });
  }

  render() {
    return(
      <section className='search-container'>
        <section className='search-bar'>
          <label htmlFor={'Search'}>
            <input
              placeholder='Search'
              value={this.state.searchParams}
              onChange={ this.update('searchParams') }
              className='session-input' />
          </label>
        </section>
        <ul className='friend-cards'>
          { this.renderResults() }
        </ul>
      </section>
    );
  }
}

export default FriendshipSearch;
