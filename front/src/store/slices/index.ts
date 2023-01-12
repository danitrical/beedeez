import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {authReducer} from './auth';

const persistConfig = {
  key: 'beedeez_danish',
  version: 1,
  storage,
  whitelist: [],
};

const reducers = combineReducers({
  auth: authReducer,
});

const rootReducer = persistReducer(persistConfig, reducers);

export default rootReducer;
