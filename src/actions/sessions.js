import axios from '../helpers/axios';
import {
  SET_SESSIONPLACE
} from './types';

export const setSessionPlace = (sessions) => ({
  type: SET_SESSIONPLACE,
  sessions
})

export const getSessionPlace = () => dispatch => 
  axios.get('/sessionPlaces')
    .then((res) =>
      dispatch(setSessionPlace(res.data))
    )
    .catch(() => {})
