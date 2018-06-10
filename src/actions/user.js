import axios from '../helpers/axios';
import {
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_FAIL,
  TOGGLE_NAV
} from './types';

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

// export const clearUpdatedPassword = () => ({

// })