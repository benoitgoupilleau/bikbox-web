import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import userReducer from '../reducers/user';
import sessionsReducer from '../reducers/sessions';

const composeEnhancers = process.env.NODE_ENV === 'production' ? compose : (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);

const configureStore = () => {
  const store = createStore(combineReducers({
    user: userReducer,
    sessions: sessionsReducer
  }), composeEnhancers(applyMiddleware(thunk)));

  return store;
};

const store = configureStore();

export default store;