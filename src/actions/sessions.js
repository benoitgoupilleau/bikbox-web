import axios from '../helpers/axios';
import {
  SET_SESSIONPLACE,
  SET_SESSIONPLACE_FAIL
} from './types';

import store from '../store/configureStore';

export const setSessionPlace = (sessions) => ({
  type: SET_SESSIONPLACE,
  sessions
})

export const setSessionPlaceFail = () => ({
  type: SET_SESSIONPLACE_FAIL,
})

export const getSessionPlace = () => dispatch => 
  axios({ method: 'GET', url:'/sessionPlaces', headers: { 'x-auth': store.getState().user.authToken } })
    .then((res) =>
      dispatch(setSessionPlace(res.data))
    )
    .catch(() => {})
