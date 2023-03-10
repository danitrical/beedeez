import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './slices';
import {persistStore} from 'redux-persist';

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: {},
});

export type ReduxState = ReturnType<typeof store.getState>;

export default () => {
  const persistor = persistStore(store);
  return {store, persistor};
};
