import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ContactList from '../ContactList/ContactList';

import {contactsOperations,contactsSelectors } from '../../redux/contacts'


const mapDispatchToProps = {
  onDeleteContact: contactsOperations.deleteContact,
  fetchContacts: contactsOperations.fetchContacts,
};

const mapStateToProps = state => ( {
  contactsForList: contactsSelectors.getVisibleContacts(state),
  isLoadingContacts: contactsSelectors.getLoading(state),
})


ContactList.defaultProps = {
  name: '',
  number: '',
  items:[],
};



ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,

    }),
  ),
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
