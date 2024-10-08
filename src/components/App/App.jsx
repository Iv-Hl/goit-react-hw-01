import Profile from '../Profile/Profile';
import userData from '../userData.json';
import FriendListItem from '../FriendList/FriendList';
import friends from '../friends.json';
import Transactions from '../HistoryOfTransaction/Transaction';
import transactions from '../transactions.json';
import css from './App.module.css';

const App = () => {
  return (
    <div className={css.container}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendListItem friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};

export default App;
