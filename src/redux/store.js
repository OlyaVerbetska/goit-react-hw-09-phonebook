import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web


import {authReducer} from './auth'
import {contactsReducer} from './contacts';

// reducer

const authPersistConfig = {
  key: 'Auth Data',
  storage,
  whitelist: ['token'],
};



//middleware
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
//store

const store = configureStore({
  reducer: {
    auth:persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware,
  // комментируем, чтоб было удобно проверять
   devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

//eslint-disable-next-line
export default { store, persistor };
