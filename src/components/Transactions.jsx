import css from "../styles/Transactions.module.css"; 
import PropTypes from "prop-types"; 

export const Transactions = ({ props }) => {
    return (
        <table className={css["transaction-history"]}>
            <thead>
                <tr>
                    <th className={css["table-headers"]}>Type</th>
                    <th className={css["table-headers"]}>Amount</th>
                    <th className={css["table-headers"]}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {props.map((el) => {
                    return (
                         <tr key={el.id}>
                            <td>{el.type}</td>
                            <td>{el.amount}</td>
                            <td>{el.currency}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
} 

Transactions.propTypes = { 
    props: PropTypes.array.isRequired,
}