import axios from '../helpers/axios';
import {
  LOGIN,
  LOGIN_FAIL,
  LOGOUT,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_FAIL,
  TOGGLE_NAV
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

export const errorLogout = () => ({
  type: LOGIN_FAIL
});

export const startLogout = () => dispatch => axios.delete('/adminusers/token')
  .then(() => dispatch(logout()))
  .catch(() => dispatch(errorLogout()))


export const toggleNavBar = () => ({
  type: TOGGLE_NAV
});

export const passwordUpdated = () => ({
  type: UPDATE_PASSWORD
});

export const passwordNotUpdated = () => ({
  type: UPDATE_PASSWORD_FAIL
});

export const updatePassword = (token, password) => dispatch => axios.post(`/adminusers/resetpassword/${token}`, { password })
  .then(() => dispatch(passwordUpdated()))
  .catch(() => dispatch(passwordNotUpdated()))
