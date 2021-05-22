import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import PropTypes from "prop-types";

import { v4 as uuidv4 } from "uuid";

import styles from "../ContactForm/ContactForm.module.css";

  const nameInputId = uuidv4();
  const telInputId = uuidv4();

export default function ContactForm() {

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  // написать switch

  const changeInputName = (event) => setName(event.currentTarget.value);
  const changeInputNumber = (event) => setNumber(event.currentTarget.value);

  const existContacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const checkContact = existContacts.some((element) => element.name === name);
    checkContact
      ? alert(`${name} is already in contacts`)
      : dispatch(contactsOperations.addContact({ name, number }));

    resetInput();
  };

  const resetInput = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.contactForm} onSubmit={handleFormSubmit}>
      <label htmlFor={nameInputId} className={styles.contactForm__label}>
        <span className={styles.contactForm__title}>Name:</span>
        <input
          id={nameInputId}
          type="text"
          name="name"
          className={styles.contactForm__input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          value={name}
          required
          onChange={changeInputName}
        />
      </label>

      <label htmlFor={telInputId} className={styles.contactForm__label}>
        <span className={styles.contactForm__title}> Phone:</span>
        <input
          id={telInputId}
          type="tel"
          name="number"
          className={styles.contactForm__input}
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          value={number}
          required
          onChange={changeInputNumber}
        />
      </label>
      <button type="submit" className={styles.contactForm__button}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.defaultProps = {
  name: "",
  number: "",
  items: [],
};

ContactForm.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
