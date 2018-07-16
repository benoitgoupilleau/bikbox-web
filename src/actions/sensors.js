import axios from '../helpers/axios';
import {
  SET_SENSOR,
  SET_SENSOR_FAIL
} from './types';

import { store } from '../store/store';

export const setSensor = (sensors) => ({
  type: SET_SENSOR,
  sensors
})

export const setSensorFail = () => ({
  type: SET_SENSOR_FAIL,
})

export const getSensor = () => dispatch => 
  axios({ method: 'GET', url:'/sensors', headers: { 'x-auth': store.getState().user.authToken } })
    .then((res) => dispatch(setSensor(res.data)))
    .catch(() => dispatch(setSensorFail()))
