import css from "../styles/Profile.module.css";
import PropTypes from "prop-types";


export const Profile = ({ user }) => { 

  const { avatar, username, tag, location, stats: { followers, views, likes } } = user; 
  
  return (
    <>
    <div className={css.profile}>
    <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
        <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{followers}</span>
        </li>
        <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{views}</span>
        </li>
        <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{likes}</span>
        </li>
    </ul>
    </div>
    </>
    ) 
}

Profile.propTypes = { 
  user: PropTypes.object, 
}