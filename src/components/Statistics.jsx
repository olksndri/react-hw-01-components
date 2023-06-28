import css from "../styles/Statistics.module.css";
import { randomRGBA } from "../js/randomRGBA";
import PropTypes from "prop-types";


export const Statistics = ({ title, data }) => {
    return (
        <>
            <section className={css.statistics}>
                {title.length > 0  && <h2 className={css.title}>{title}</h2>}

                <ul className={css["stat-list"]}>
                   {data.map((elem) => {
                       return (<li key={elem.id} className={css.item} style={{backgroundColor: randomRGBA()}}>
                                <span className={css.label}>{elem.label}</span>
                                <span className={css.percentage}>{elem.percentage}%</span>
                            </li>)
                        })}
                </ul>
            </section>
        </>
    ) 
}

Statistics.propTypes = {
    title: PropTypes.string, 
    data: PropTypes.array.isRequired,
}


