import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.border}>
      <div>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.text}>{'@' + tag}</p>
        <p className={css.text}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.listCases}>
          <span className={css.listTxt}>Followers</span>
          <span className={css.listTxt}>{stats.followers}</span>
        </li>
        <li className={css.listCases}>
          <span className={css.listTxt}>Views</span>
          <span className={css.listTxt}>{stats.views}</span>
        </li>
        <li className={css.listCases}>
          <span className={css.listTxt}>Likes</span>
          <span className={css.listTxt}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
