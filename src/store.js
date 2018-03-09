import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistCombineReducers(persistConfig, reducers);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
