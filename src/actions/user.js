import axios from '../helpers/axios';
import {
  UPDATE_PASSWORD
} from './types';

export const passwordUpdated = () => ({
  type: UPDATE_PASSWORD
});

export const passwordNotUpdated = () => ({
  type: UPDATE_PASSWORD_FAIL
});

export const updatePassword = (token, password) => dispatch => axios.post(`/adminusers/resetpassword/${token}`, { password })
  .then(() => dispatch(updatePassword()))
  .catch(() => dispatch(passwordNotUpdated()))

// export const clearUpdatedPassword = () => ({

// })