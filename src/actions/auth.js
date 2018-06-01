
import {
  LOGIN,
  LOGOUT
} from './types';

export const login = (uid) => ({
  type: LOGIN,
  uid
});

export const startLogin = () => dispatch => dispatch(login('123zvss'));

export const logout = () => ({
  type: LOGOUT
});

export const startLogout = () => dispatch => dispatch(logout());
