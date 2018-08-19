import axios from '../helpers/axios';
import {
  LOGIN,
  LOGIN_FAIL,
  LOGOUT,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_FAIL,
  TOGGLE_NAV
} from './types';

import { store } from '../store/store';

export const login = (authToken, expiresIn, user) => ({
  type: LOGIN,
  authToken,
  expiresIn,
  user
});

export const errorLogin = (status) => ({
  type: LOGIN_FAIL,
  status
});

export const startLogin = (email, password) => dispatch => axios({ method: 'POST', url: '/adminusers/login', data: { email, password }, headers: { 'x-key': process.env.X_KEY } })
  .then((res) => dispatch(login(res.headers['x-auth'], res.headers['x-auth-expire'], res.data)))
  .catch((res) => dispatch(errorLogin(res.response.status)))

export const logout = () => ({
  type: LOGOUT
});

export const startLogout = () => dispatch => axios({ method: 'DELETE', url:'/adminusers/token', headers: { 'x-auth': store.getState().user.authToken } })
  .then(() => dispatch(logout()))
  .catch(() => dispatch(logout()))


export const toggleNavBar = () => ({
  type: TOGGLE_NAV
});

export const passwordUpdated = () => ({
  type: UPDATE_PASSWORD
});

export const passwordNotUpdated = () => ({
  type: UPDATE_PASSWORD_FAIL
});

export const updatePassword = (token, password) => dispatch => axios({ method: 'POST', url: `/adminusers/resetpassword/${token}`, data: { password }, headers: { 'x-auth': store.getState().user.authToken } })
  .then(() => dispatch(passwordUpdated()))
  .catch(() => dispatch(passwordNotUpdated()))
