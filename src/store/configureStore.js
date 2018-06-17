import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import userReducer from '../reducers/user';

const composeEnhancers = process.env.NODE_ENV === 'production' ? compose : (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);

export default () => {
  // Store
  const store = createStore(combineReducers({
    user: userReducer
  }), composeEnhancers(applyMiddleware(thunk)));

  return store;
};
