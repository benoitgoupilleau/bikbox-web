import axios from '../helpers/axios';
import {
  SET_SESSIONPLACE,
  SET_SESSIONPLACE_FAIL
} from './types';

export const setSessionPlace = (sessions) => ({
  type: SET_SESSIONPLACE,
  sessions
})

export const setSessionPlaceFail = () => ({
  type: SET_SESSIONPLACE_FAIL,
})

export const getSessionPlace = () => dispatch => 
  axios.get('/sessionPlaces')
    .then((res) =>
      dispatch(setSessionPlace(res.data))
    )
    .catch(() => {})
