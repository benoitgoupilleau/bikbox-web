import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createEncryptor from 'redux-persist-transform-encrypt'

import userReducer from '../reducers/user';
import sessionsReducer from '../reducers/sessions';
import parkingsReducer from '../reducers/parkings';
import alertsReducer from '../reducers/alerts';

const composeEnhancers = process.env.NODE_ENV === 'production' ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const encryptor = createEncryptor({
  secretKey: process.env.PERSIST_KEY,
  onError: function (error) {
    console.log(error)
  }
})

const rootReducer = combineReducers({
  user: userReducer,
  sessions: sessionsReducer,
  parkings: parkingsReducer,
  alerts: alertsReducer
});

const persistConfig = {
  key: 'bikeboxweb',
  storage,
  transforms: [encryptor],
  whitelist: [ 'user'],
  stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);




