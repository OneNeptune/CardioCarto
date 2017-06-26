import React from 'react';

const FriendCardPending = ({ friend, actionHandler, type }) => {
  return(
    <li className='friend-card'>
      <img src='' className='friend-avatar' />
      <p className='friend-name'>{ friend.full_name }</p>
      <button
        className={'friend-request' + ` ${type}`}
        value={ friend.id }
        onClick={ actionHandler }>
        { type }
      </button>
    </li>
  );
}

export default FriendCardPending;
