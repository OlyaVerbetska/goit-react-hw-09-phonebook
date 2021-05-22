import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";
import { contactsActions, contactsSelectors } from "../../redux/contacts";

import styles from "../Filter/Filter.module.css";

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const onFilterValue = (event) => {
    dispatch(contactsActions.changeFilter(event.currentTarget.value));
  };
  return (
    <>
      <p className={styles.filter__title}>Find contacts by name:</p>
      <label htmlFor={uuidv4()} />
      <input
        className={styles.filter__input}
        id={uuidv4()}
        type="text"
        name="filter"
        onChange={onFilterValue}
        value={value}
      />
    </>
  );
}
Filter.defaultProps = {
  value: "",
};

Filter.propTypes = {
  value: PropTypes.string,
};
