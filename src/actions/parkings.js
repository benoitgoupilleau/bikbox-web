import axios from '../helpers/axios';
import {
  SET_PARKING,
  SET_PARKING_FAIL
} from './types';

import { store } from '../store/store';

export const setParking = (parkings) => ({
  type: SET_PARKING,
  parkings
})

export const setParkingFail = () => ({
  type: SET_PARKING_FAIL,
})

export const getParking = () => dispatch => 
  axios({ method: 'GET', url:'/parkings', headers: { 'x-auth': store.getState().user.authToken } })
    .then((res) => dispatch(setParking(res.data)))
    .catch(() => dispatch(setParkingFail()))
