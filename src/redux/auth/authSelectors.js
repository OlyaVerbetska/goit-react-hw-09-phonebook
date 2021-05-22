//import { createSelector } from '@reduxjs/toolkit';


const getIsAuthenticated = state => state.auth.isAuthenticated;
const getMail = state => state.auth.user.email;
const getError = state =>  state.auth.error;



//eslint-disable-next-line
export default { getIsAuthenticated, getMail, getError}
