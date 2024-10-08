import css from './FriendItem.module.css';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={css.avaImg} src={avatar} alt={avatar} width="50" />
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.isOnline : css.isOffline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendsListItem;
