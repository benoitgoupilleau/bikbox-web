import axios from '../helpers/axios';
import {
  SET_ALERT,
  SET_ALERT_FAIL,
  CLOSE_ALERT,
  CLOSE_ALERT_FAILED
} from './types';

import { store } from '../store/store';

const setAlert= (alerts) => ({
  type: SET_ALERT,
  alerts
})

const setAlertFail = () => ({
  type: SET_ALERT_FAIL,
})

export const getAlert = () => dispatch => 
  axios({ method: 'GET', url:'/alerts', headers: { 'x-auth': store.getState().user.authToken } })
    .then((res) => dispatch(setAlert(res.data)))
    .catch(() => dispatch(setAlertFail()))


const alertClosed = (id) => ({
  type: CLOSE_ALERT,
  id
})

const alertClosedFailed = () => ({
  type: CLOSE_ALERT_FAILED
})

export const closeAlert = (id) => dispatch =>
  axios({ method: 'PATCH', url: `/alert/${id}`, headers: { 'x-auth': store.getState().user.authToken }, data: { status: 'closed' } })
    .then(() => dispatch(alertClosed(id)))
    .catch(() => dispatch(alertClosedFailed()))