import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';

import styles from '../Filter/Filter.module.css';

const Filter = ({ onFilterValue, value }) => (
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
const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onFilterValue: e =>
    dispatch(contactsActions.changeFilter(e.currentTarget.value)),
});

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
