import styles from "./Filter.module.css";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { setFilter } from "../../store/contacts";

export const Filter = () => {
  const filterInputId = nanoid();
  const dispatch = useDispatch();
  const onFilter = (e) => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div className={styles.Filter__container}>
      <label className={styles.Filter__label} htmlFor={filterInputId}>
        Find contact by name:
        <br />
        <input
          className={styles.Filter__input}
          type="text"
          onChange={onFilter}
          id={filterInputId}
        />
      </label>
    </div>
  );
};

export default Filter;
