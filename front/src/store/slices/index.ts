import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {authReducer} from './auth';
import {stationReducer} from './stations';

const persistConfig = {
  key: 'beedeez_danish',
  version: 1,
  storage,
  whitelist: ['auth'],
};

const reducers = combineReducers({
  auth: authReducer,
  station: stationReducer,
});

const rootReducer = persistReducer(persistConfig, reducers);

export default rootReducer;
