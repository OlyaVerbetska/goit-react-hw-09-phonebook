import { createAction } from '@reduxjs/toolkit';


const fetchContactsRequest = createAction('contacts/fetch_Request');
const fetchContactsSuccess = createAction('contacts/fetch_Success');
const fetchContactsError = createAction('contacts/fetch_Error');

const addContactRequest = createAction('contacts/add_Request');
const addContactSuccess = createAction('contacts/add_Success');
const addContactError = createAction('contacts/add_Error');

const deleteContactRequest = createAction('contacts/delete_Request');
const deleteContactSuccess = createAction('contacts/delete_Success');
const deleteContactError = createAction('contacts/delete_Error');

const changeFilter = createAction('contacts/changeFilter');

//eslint-disable-next-line
export default {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
};
