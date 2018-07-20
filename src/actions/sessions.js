import axios from '../helpers/axios';
import {
  SET_SESSIONPLACE,
  SET_SESSIONPLACE_FAIL,
  DELETE_SESSION
} from './types';

import { store } from '../store/store';

export const setSessionPlace = (sessions) => ({
  type: SET_SESSIONPLACE,
  sessions
})

export const setSessionPlaceFail = () => ({
  type: SET_SESSIONPLACE_FAIL,
})

export const getSessionPlace = () => dispatch => 
  axios({ method: 'GET', url:'/sessionPlaces', headers: { 'x-auth': store.getState().user.authToken } })
    .then((res) => dispatch(setSessionPlace(res.data)))
    .catch(() => dispatch(setSessionPlaceFail()))

export const deleteOneSession = (_id) => ({
  type: DELETE_SESSION,
  _id
})

export const dispatchDelSession = (_id) => dispatch =>
  axios({ method: 'DELETE', url: `/sessionPlaces/${_id}`, headers: { 'x-auth': store.getState().user.authToken } })
    .then(() => dispatch(deleteOneSession(_id)))