import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Loader from "react-loader-spinner";

import styles from "../ContactList/ContactList.module.css";

import { contactsOperations, contactsSelectors } from "../../redux/contacts";

export default function ContactList() {
  const dispatch = useDispatch();

  const contactsForList = useSelector(contactsSelectors.getVisibleContacts);
 // console.log('list', contactsForList);
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  useEffect(() => {
    console.log(contactsOperations.fetchContacts());
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ul className={styles.contactList}>
        {contactsForList.length > 0 && (
          <h2 className={styles.contactList__subtitle}> Contacts </h2>
        )}

        {contactsForList.map((contact) => (
          <li key={uuidv4()} className={styles.contactList__item}>
            <span className={styles.contactList__elem}> {contact.name}:</span>
            <span>{contact.number} </span>

            <button
              type="button"
              className={styles.contactList__button}
              onClick={() => {
                dispatch(contactsOperations.deleteContact(contact.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {isLoadingContacts && (
        <div className={styles.Loader}>
          {" "}
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

ContactList.defaultProps = {
  name: "",
  number: "",
  items: [],
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
