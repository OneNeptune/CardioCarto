import React from 'react';
import FriendCard from './friend_card';
import { values } from 'lodash';

class FriendshipView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'received',
      delete: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.friendsCards = this.friendsCards.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { value } = e.target;
    this.setState({type: value});
  }

  handleUpdate(e) {
    e.preventDefault();
    const friendship = {id: e.currentTarget.value, status: true};
    this.props.updateFriendship(friendship);
    this.setState({ delete: this.state.delete++ });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.destroyFriendship(e.currentTarget.value);
    this.setState({ delete: this.state.delete++ });
  }

  friendsCards(type) {
    const activeFriends = this.props.active;
    const pendingFriends = this.props.pending;
    const currentUser = this.props.currentUser;

    const activeRequests = values(this.props.activeRequests);
    const pendingReceived = values(this.props.pendingReceived);
    const pendingSent = values(this.props.pendingSent);

    const requests = [activeRequests, pendingReceived, pendingSent];
    const friends = [activeFriends, pendingFriends, pendingFriends];
    const actionHandlers =
      [this.handleDelete, this.handleUpdate, this.handleDelete];

    return requests[type].map((request) => {
      return(
        <FriendCard
          key={`Friendship${request.id}`}
          friendship={request.id}
          friend={friends[type][(request.initiator_id === currentUser.id) ?
            request.receiver_id : request.initiator_id]}
          actionHandler={ actionHandlers[type] }
          actionRemove={ type === 1 ? this.handleDelete : '' }
          type={ type } />
      );
      }
    );
  }

  componentDidMount() {
    this.props.fetchAllFriendships();
  }

  render() {
    const { type } = this.state;
    const {
      active, activeRequests, pending, pendingReceived, pendingSent
    } = this.props;

    if (!this.props.loaded) return null;

    return(
      <section className='friends-container'>
        <section className='friends-content-header'>
          Friends
        </section>
        <section className='friends-content'>
          <ul>
            { this.friendsCards(0) }
          </ul>
        </section>
        <section className='friends-content-header'>
          Pending Friends
        </section>
        <section className='friends-content'>
          <section className='button-row'>
            <section className='detail-buttons'>
              <button
                className={ type === 'received' ? 'active' : ''}
                value='received'
                onClick={ this.handleClick }>
                <i
                  className='fa fa-inbox'
                  aria-hidden='true'></i> Received
              </button>
              <button
                className={ type === 'sent' ? 'active' : ''}
                value='sent'
                onClick={ this.handleClick }>
                <i
                  className='fa fa-share'
                  aria-hidden='true'></i> Sent
              </button>
            </section>
          </section>
          <section className='friends-content'>
            <ul className='friend-cards'>
              { this.friendsCards(type === 'received' ? 1 : 2) }
            </ul>
          </section>
        </section>
      </section>
    );
  }
}

export default FriendshipView;
