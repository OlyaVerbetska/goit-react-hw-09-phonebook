import { Component } from 'react';

import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Loader from 'react-loader-spinner';

import styles from '../ContactList/ContactList.module.css';

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    const { contactsForList, onDeleteContact, isLoadingContacts } = this.props;
    return (
      <>
        <ul className={styles.contactList}>
          {contactsForList.length > 0 && (
            <h2 className={styles.contactList__subtitle}> Contacts </h2>
          )}

          {contactsForList.map(contact => (
            <li key={uuidv4()} className={styles.contactList__item}>
              <span className={styles.contactList__elem}> {contact.name}:</span>
              <span>{contact.number} </span>

              <button
                type="button"
                className={styles.contactList__button}
                onClick={() => onDeleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        {isLoadingContacts && (
          <div className={styles.Loader}>
            {' '}
            <Loader
              type="Circles"
              color="#4682b4"
              height={30}
              width={100}
              timeout={1000} //3 secs
            />
          </div>
        )}
      </>
    );
  }
}

ContactList.propTypes = {
  contactsForList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      isLoadingContacts:PropTypes.bool,
    }),
  ).isRequired,
};

export default ContactList;
