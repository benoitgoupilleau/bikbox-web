import axios from '../helpers/axios';
import {
  SET_ALERT,
  SET_ALERT_FAIL
} from './types';

import { store } from '../store/store';

export const setAlert= (alerts) => ({
  type: SET_ALERT,
  alerts
})

export const setAlertFail = () => ({
  type: SET_ALERT_FAIL,
})

export const getAlert = () => dispatch => 
  axios({ method: 'GET', url:'/alerts', headers: { 'x-auth': store.getState().user.authToken } })
    .then((res) => dispatch(setAlert(res.data)))
    .catch(() => dispatch(setAlertFail()))
