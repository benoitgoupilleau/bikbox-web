import axios from '../helpers/axios';
import {
  SET_SESSIONPLACE,
  SET_SESSIONPLACE_FAIL,
  DELETE_SESSION,
  UPDATE_SESSION
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

export const updateSession = (_id, endDate) => ({
  type: UPDATE_SESSION,
  _id,
  endDate
})

export const dispatchUpdateSession = (_id, endDate) => dispatch => 
  axios({ method: 'PATCH', url: `/sessionPlaces/${_id}`, headers: { 'x-auth': store.getState().user.authToken }, data: { endDate } })
    .then(() => dispatch(updateSession(_id, endDate)))