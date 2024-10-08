import FriendsListItem from '../FriendItem/FriendItem';
import css from './FriendList.module.css';

export default function FriendListItem({ friends }) {
  return (
    <ul className={css.main}>
      {friends.map(friend => {
        return (
          <li key={friend.id} className={css.list}>
            <FriendsListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}
