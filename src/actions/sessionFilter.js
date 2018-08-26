import moment from '../helpers/moment'
import {
  UPDATE_STARTDATE,
  UPDATE_ENDDATE,
  UPDATE_TEXT
} from './types';

export const updateStartDate = (date) => ({
  type: UPDATE_STARTDATE,
  date: moment(date).startOf('day')
})

export const updateEndDate = (date) => ({
  type: UPDATE_ENDDATE,
  date: moment(date).endOf('day')
})

export const updateText = (text) => ({
  type: UPDATE_TEXT,
  text
})