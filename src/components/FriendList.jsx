import css from "../styles/FriendList.module.css"; 
import PropTypes from "prop-types";

export const FriendList = ({ props }) => { 
    return (
        <ul className={css['friend-list']}>
            {props.map((el) => {
                return (<li key={el.id} className={css.item}>
                            <span className={css.status} style={{backgroundColor: el.isOnline 
                            ? 'hsla(127, 81%, 46%, 0.866)'
                            : 'hsla(6, 89%, 48%, 0.888)'
                        }}></span>
                            <img className={css.avatar} src={el.avatar} alt="User avatar" width="48" />
                            <p className={css.name}>{el.name}</p>
                        </li>
                )
            })}
        </ul>
    )
}

FriendList.propTypes = { 
    props: PropTypes.array.isRequired
}