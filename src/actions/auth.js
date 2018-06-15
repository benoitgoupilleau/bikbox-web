import axios from '../helpers/axios';
import {
  LOGIN,
  LOGIN_FAIL,
  LOGOUT
} from './types';

export const login = (authToken, user) => ({
  type: LOGIN,
  authToken,
  user
});

export const errorLogin = () => ({
  type: LOGIN_FAIL
});

export const startLogin = (email, password) => dispatch => axios.post('/adminusers/login', { email, password })
  .then((res) => dispatch(login(res.headers['x-auth'], res.data)))
  .catch(() => dispatch(errorLogin()))

export const logout = () => ({
  type: LOGOUT
});

export const startLogout = () => dispatch => dispatch(logout());
