import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

import '../styles.css'

const ContactsView = () => (
  <div className = "phonebook">
    <h1 className="title">Phonebook</h1>
    <ContactForm />
    <Filter />
    <ContactList />
  </div>
);

export default ContactsView;
