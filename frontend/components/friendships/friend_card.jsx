import React from 'react';

const FriendCard = ({
  friend, friendship, actionHandler, type, actionRemove
}) => {
  const thisClass = ['remove', 'accept', 'cancel', 'add'];
  const rejectButton = (type === 1) ?
      <button
        className={'friend-request reject'}
        value={ friendship }
        onClick={ actionRemove }>
        <i className="fa fa-times-circle" aria-hidden="true"></i>
      </button>
   : '' ;
  return(
    <li className='friend-card'>
      <img src={ friend.image_url } className='friend-avatar' />
      <p className='friend-name'>{ friend.full_name ||
          `${friend.first_name} ${friend.last_name}` }</p>
      <button
        className={'friend-request' + ` ${thisClass[type]}`}
        value={ friendship }
        onClick={ actionHandler }>
        { type % 2 === 0 ?
          <i className="fa fa-times-circle" aria-hidden="true"></i> :
          <i className="fa fa-plus" aria-hidden="true"></i>  }
      </button>
      { rejectButton }
    </li>
  );
};

export default FriendCard;
