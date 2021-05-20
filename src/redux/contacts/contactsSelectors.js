
import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const getLoading = state => state.contacts.loading;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
//eslint-disable-next-line
export default { getContacts, getFilter, getLoading, getVisibleContacts };
