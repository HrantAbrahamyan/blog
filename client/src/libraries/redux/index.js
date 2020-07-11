import { createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducer';
import createMiddleware from './middleware';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['form'],
};

const middleware = createMiddleware(thunkMiddleware);
const persistedReducer = persistReducer(persistConfig, rootReducer());

export default (initialState) => {
  const store = createStore(persistedReducer, initialState, middleware);
  const persistor = persistStore(store);

  return { store, persistor };
};
