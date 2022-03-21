import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../store/contacts";
import PropTypes from "prop-types";

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li key={id} className={styles.Contact__item}>
      {name}: {number}
      <button
        className={styles.Contact__button}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Remove
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
};
