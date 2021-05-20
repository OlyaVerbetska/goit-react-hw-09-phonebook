import { Component } from 'react';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

import styles from '../ContactForm/ContactForm.module.css';

class ContactForm extends Component {
  nameInputId = uuidv4();
  telInputId = uuidv4();

  state = {
    name: '',
    number: '',
  };

  changeInput = e => {
    const inputName = e.currentTarget.name;
    this.setState({
      [inputName]: e.currentTarget.value,
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const checkContact = this.props.existContacts.some(
      element => element.name === this.state.name,
    );

    checkContact
      ? alert(`${this.state.name} is already in contacts`)
      : this.props.onSubmit(this.state);

    this.resetInput();
  };

  resetInput = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.contactForm} onSubmit={this.handleFormSubmit}>
        <label htmlFor={this.nameInputId} className={styles.contactForm__label}>
          <span className={styles.contactForm__title}>Name:</span>
          <input
            id={this.nameInputId}
            type="text"
            name="name"
            className={styles.contactForm__input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            value={name}
            required
            onChange={this.changeInput}
          />
        </label>

        <label htmlFor={this.telInputId} className={styles.contactForm__label}>
          <span className={styles.contactForm__title}> Phone:</span>
          <input
            id={this.telInputId}
            type="tel"
            name="number"
            className={styles.contactForm__input}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            value={number}
            required
            onChange={this.changeInput}
          />
        </label>
        <button type="submit" className={styles.contactForm__button}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  existContacts: contactsSelectors.getContacts(state),
});
const mapDispatchToProps = {
  onSubmit: contactsOperations.addContact,
};


ContactForm.defaultProps = {
  name: '',
  number: '',
  items:[],
};

ContactForm.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
