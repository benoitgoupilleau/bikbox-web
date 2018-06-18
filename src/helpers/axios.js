import axios from 'axios';

import store from '../store/configureStore';



const instance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    ['x-key']: process.env.X_KEY,
    ['Content-Type']: 'application/json',
    ['x-auth']: store.getState().user.authToken
  }
});

const listener = function () {
  const token = store.getState().user.authToken;
  instance.defaults.headers.common['x-auth'] = token;
}

store.subscribe(listener)

export default instance;
